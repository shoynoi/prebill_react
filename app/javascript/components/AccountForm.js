import React from 'react';
import PropTypes from 'prop-types';
import ValidationErrors from './ValidationErrors';
import Button from './Button';

class AccountForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: props.user,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  updateUser(key, value) {
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [key]: value,
      },
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    const { user } = this.state;
    const { onSubmit } = this.props;
    onSubmit(user);
  }

  handleInputChange(event) {
    const { target } = event;
    const { name, value } = target;
    this.updateUser(name, value);
  }

  render() {
    const { errorMessages } = this.props;
    const { user } = this.state;

    return (

      <div className="auth-form__body">
        <ValidationErrors errorMessages={errorMessages} />
        <form onSubmit={this.handleSubmit} id="user-form">
          <div className="form-items--block">
            <div className="form-item--block">
              <label htmlFor="user_name">
                <strong className="form-item__label--block">ユーザー名</strong>
                <input
                  type="text"
                  className="form-item__text-input--block"
                  id="user_name"
                  name="name"
                  placeholder="ユーザー名"
                  value={user.name}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <div className="form-item--block">
              <label htmlFor="user_email">
                <strong className="form-item__label--block">Eメール</strong>
                <input
                  name="email"
                  id="user_email"
                  onChange={this.handleInputChange}
                  className="form-item__text-input--block"
                  placeholder="Eメール"
                  value={user.email}
                />
              </label>
            </div>
            <div className="form-item--block">
              <label htmlFor="user_password">
                <strong className="form-item__label--block">パスワード</strong>
                <input
                  type="password"
                  className="form-item__text-input--block"
                  id="user_password"
                  name="password"
                  onChange={this.handleInputChange}
                  placeholder="パスワード"
                />
              </label>
              <p className="form-item__help">6字以上</p>
            </div>
            <div className="form-item--block">
              <label htmlFor="user_password_confirmation">
                <strong className="form-item__label--block">パスワード(確認)</strong>
                <input
                  type="password"
                  className="form-item__text-input--block"
                  id="user_password_confirmation"
                  name="password_confirmation"
                  onChange={this.handleInputChange}
                  placeholder="パスワード(確認)"
                />
              </label>
            </div>
          </div>
          <ul className="form-actions__items">
            <li className="form-actions__item">
              <Button
                onClick={() => { document.getElementById('user-form').dispatchEvent(new Event('submit')); }}
                size="lg"
                color="primary"
                block="block"
              >
                アカウントを作成する
              </Button>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default AccountForm;

AccountForm.propTypes = {
  user: PropTypes.objectOf(PropTypes.string),
  onSubmit: PropTypes.func.isRequired,
  errorMessages: PropTypes.arrayOf(PropTypes.string),
};

AccountForm.defaultProps = {
  user: {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  },
  errorMessages: [],
};
