import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const NotificationIcon = ({ onClick, hasUnread }) => (
  <div className="header-notification__label">
    <button type="button" className="header-notification__icon" onClick={onClick}>
      <i className={hasUnread ? 'header-notification__badge' : ''} />
      <FontAwesomeIcon icon={faBell} />
    </button>
  </div>
);

export default NotificationIcon;

NotificationIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  hasUnread: PropTypes.bool.isRequired,
};
