import React from 'react';
import PropTypes from 'prop-types';

const ServiceList = ({ children }) => {
  if (children.count === 0) {
    return null;
  }

  return (
    <div className="list-group">
      <div className="list-group__labels">
        <div className="list-group__label col-lg">サービス名</div>
        <div className="list-group__label col-sm">プラン</div>
        <div className="list-group__label col-sm">料金</div>
        <div className="list-group__label">更新日</div>
        <div className="list-group__label">通知日</div>
      </div>
      <div className="list-group__inner">
        {children}
      </div>
    </div>
  );
};

export default ServiceList;

ServiceList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
