import React from 'react';

const Service = ({ service }) => (
  <div className="list">
    <div className="list--display">
      <div className="list-item col-lg">{service.name}</div>
      <div className="list-item col-sm">{service.plan}</div>
      <div className="list-item col-sm">{service.price}</div>
      <div className="list-item__renewal">
        <span className="list-item__renewal-text">{service.renewed_on}</span>
      </div>
      <div className="list-item__remind">
        <span className="list-item__remind-text">{service.remind_on}</span>
      </div>
      <div className="list--expandable">
        <div className="list-item list-item__memo">
          <p>{service.description}</p>
        </div>
        <div className="list__actions">
          <div className="list__action">
            <a href={`services/${service.id}/edit`} className="btn--full btn--sm btn--secondary">修正</a>
          </div>
          <div className="list__action">
            {/* TODO 削除ボタンを実装 */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Service;
