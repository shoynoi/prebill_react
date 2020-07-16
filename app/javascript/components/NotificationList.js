import React from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import NotificationItem from './NotificationItem';

const NotificationList = ({ onClick, closeDropdown, notifications }) => {
  NotificationList.handleClickOutside = () => closeDropdown();

  return (
    <div className="header-dropdown is-notification">
      <div className="header-dropdown__header">
        通知
      </div>
      { notifications.length
        ? (
          <ul className="header-dropdown__items is-notification">
            { notifications.map((notification) => (
              <NotificationItem
                notification={notification}
                onClick={onClick}
                key={notification.id}
              />
            ))}
          </ul>
        )
        : <p className="header-dropdown__container">通知はありません</p>}
    </div>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => NotificationList.handleClickOutside,
};

export default onClickOutside(NotificationList, clickOutsideConfig);

NotificationList.propTypes = {
  closeDropdown: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  notifications: PropTypes.arrayOf(PropTypes.object).isRequired,
};
