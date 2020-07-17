import React from 'react';
import PropTypes from 'prop-types';
import NotificationIcon from './NotificationIcon';
import NotificationList from './NotificationList';
import getCsrfToken from '../helpers/getCsrfToken';

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: null,
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.markAsRead = this.markAsRead.bind(this);
  }

  componentDidMount() {
    this.fetchNotifications();
  }

  componentDidUpdate(prevProps) {
    const { services } = this.props;
    if (prevProps.services !== services) {
      this.fetchNotifications();
    }
  }

  fetchNotifications() {
    fetch('/api/notifications', {
      method: 'GET',
      credentials: 'same-origin',
    })
      .then((response) => {
        response.json()
          .then((notifications) => {
            this.setState({ notifications });
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  toggleDropdown() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  markAsRead(notification) {
    if (notification.read) return;
    fetch(`/api/notifications/${notification.id}`, {
      method: 'PATCH',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'X-CSRF-Token': getCsrfToken(),
      },
    })
      .then((response) => {
        if (response.ok) {
          const { notifications } = this.state;
          const updatedNotifications = notifications.map((prevNotification) => (
            prevNotification.id === notification.id
              ? { ...notification, read: true }
              : prevNotification
          ));
          this.setState({
            notifications: [
              ...updatedNotifications,
            ],
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { notifications, isOpen } = this.state;

    if (notifications === null) return null;

    const hasUnRead = notifications.some((notification) => !notification.read);

    return (
      <div className="header-notification">
        <NotificationIcon onClick={this.toggleDropdown} hasUnRead={hasUnRead} />
        { isOpen
        && (
          <NotificationList
            notifications={notifications}
            eventTypes={['click', 'touchstart']}
            closeDropdown={() => this.setState({ isOpen: false })}
            onClick={this.markAsRead}
          />
        )}
      </div>
    );
  }
}

export default Notification;

Notification.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object),
};

Notification.defaultProps = {
  services: [],
};
