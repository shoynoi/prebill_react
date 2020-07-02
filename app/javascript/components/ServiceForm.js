import React from 'react';
import PropTypes from 'prop-types';
import ValidationErrors from './ValidationErrors';
import LinkButton from './LinkButton';

class ServiceForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      service: props.service,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  updateService(key, value) {
    this.setState((prevState) => ({
      service: {
        ...prevState.service,
        [key]: value,
      },
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    const { service } = this.state;
    const { onSubmit } = this.props;
    onSubmit(service);
  }

  handleInputChange(event) {
    const { target } = event;
    const { name, value } = target;
    this.updateService(name, value);
  }

  render() {
    const { service } = this.state;
    const { errorMessages } = this.props;

    return (
      <div>

        <ValidationErrors errorMessages={errorMessages} />

        <form onSubmit={this.handleSubmit}>
          <div className="form-items">
            <div className="form-item">
              <label htmlFor="service_name">
                <strong className="form-item__label">サービス名</strong>
                <input
                  type="text"
                  className="form-item__text-input"
                  id="service_name"
                  name="name"
                  placeholder="サービス名"
                  value={service.name}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <div className="form-items__inner">
              <div className="form-item">
                <label htmlFor="service_plan">
                  <strong className="form-item__label">プラン</strong>
                  <select
                    name="plan"
                    id="service_plan"
                    value={service.plan}
                    onChange={this.handleInputChange}
                    className="form-item__select"
                  >
                    <option value="monthly">月額</option>
                    <option value="yearly">年額</option>
                  </select>
                </label>
              </div>
              <div className="form-item">
                <label htmlFor="service_price">
                  <strong className="form-item__label">料金</strong>
                  <input
                    type="number"
                    className="form-item__text-input"
                    id="service_price"
                    name="price"
                    value={service.price}
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>
            </div>
            <div className="form-item">
              <label htmlFor="service_renewed_on">
                <strong className="form-item__label">更新日</strong>
                <input
                  type="date"
                  className="form-item__text-input"
                  id="service_renewed_on"
                  name="renewed_on"
                  value={service.renewed_on}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <div className="form-item">
              <label htmlFor="service_remind_on">
                <strong className="form-item__label">通知日</strong>
                <input
                  type="date"
                  className="form-item__text"
                  id="service_remind_on"
                  name="remind_on"
                  value={service.remind_on}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <div className="form-item">
              <label htmlFor="service_description">
                <strong className="form-item__label">メモ</strong>
                <textarea
                  name="description"
                  id="service_description"
                  className="form-item__textarea"
                  value={service.description}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
          </div>
          <ul className="form-actions__items">
            <li className="form-actions__item">
              <input type="submit" value="登録" name="commit" />
            </li>
            <li className="form-actions__item--cancel">
              <LinkButton href="/" color="btn--secondary" size="btn--md">キャンセル</LinkButton>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default ServiceForm;

ServiceForm.propTypes = {
  service: PropTypes.shape({
    name: PropTypes.string,
    plan: PropTypes.string,
    price: PropTypes.number,
    renewed_on: PropTypes.string,
    remind_on: PropTypes.string,
    description: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
  errorMessages: PropTypes.arrayOf(PropTypes.string),
};

ServiceForm.defaultProps = {
  service: {
    name: '',
    plan: 'monthly',
    price: 0,
    renewed_on: '',
    remind_on: '',
    description: '',
  },
  errorMessages: [],
};
