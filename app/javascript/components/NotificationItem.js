import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ notification, onClick }) => (
  <li aria-hidden="true" className="header-dropdown__item" onClick={() => onClick(notification)}>
    <div className="header-dropdown__container">
      <div className={`header-dropdown__unread-icon ${notification.read ? 'is-read' : ''}`} />
      <div className="header-dropdown__text-holder">
        <p className="header-dropdown__text">
          {notification.message}
        </p>
        <time className="header-dropdown__time-holder">
          {`${notification.created_at}前`}
        </time>
      </div>
    </div>
  </li>
);

export default NotificationItem;

NotificationItem.propTypes = {
  notification: PropTypes.shape({
    message: PropTypes.string,
    created_at: PropTypes.string,
    read: PropTypes.bool,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
