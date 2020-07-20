import React from 'react';
import PropTypes from 'prop-types';
import ListDisplayedItem from './ListDisplayedItem';
import ListExpandableItem from './ListExpandableItem';

class ServiceItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpand: false,
    };

    this.handleExpand = this.handleExpand.bind(this);
  }

  handleExpand() {
    this.setState((prevState) => ({
      isExpand: !prevState.isExpand,
    }));
  }

  render() {
    const { service, onDelete } = this.props;
    const { isExpand } = this.state;

    return (
      <div className="list-item">
        <ListDisplayedItem service={service} onClick={this.handleExpand} isExpand={isExpand} />
        <ListExpandableItem service={service} onDelete={onDelete} isExpand={isExpand} />
      </div>
    );
  }
}

export default ServiceItem;

ServiceItem.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    plan: PropTypes.string,
    price: PropTypes.number,
    renewed_on: PropTypes.string,
    remind_on: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
