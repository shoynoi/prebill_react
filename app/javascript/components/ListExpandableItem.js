import React from 'react';
import PropTypes from 'prop-types';
import Linkify from 'linkifyjs/react';
import LinkButton from './LinkButton';
import Button from './Button';

const ListExpandableItem = ({ service, onDelete }) => (
  <div className="list-item--expandable">
    <Linkify className="list-item__memo" tagName="p" options={{ target: '_blank' }}>{service.description}</Linkify>
    <div className="list-item__actions">
      <div className="list-item__action">
        <LinkButton href={`services/${service.id}/edit`} color="btn--secondary" size="btn--sm">修正</LinkButton>
      </div>
      <div className="list-item__action">
        <Button
          onClick={() => onDelete(service.id)}
          color="btn--danger"
          size="btn--sm"
        >
          削除
        </Button>
      </div>
    </div>
  </div>
);

export default ListExpandableItem;

ListExpandableItem.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
  }),
  onDelete: PropTypes.func.isRequired,
};

ListExpandableItem.defaultProps = {
  service: undefined,
};
