import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
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
    return (
      <div className="auth-form__body">
        <form onSubmit={this.handleSubmit} id="login-form">
          <div className="form-items--block">
            <div className="form-item--block">
              <label htmlFor="user_email">
                <strong className="form-item__label--block">メールアドレス</strong>
                <input
                  name="email"
                  id="user_email"
                  onChange={this.handleInputChange}
                  className="form-item__text-input--block"
                  placeholder="Eメール"
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
            </div>
          </div>
          <ul className="form-actions__items">
            <li className="form-actions__item">
              <Button
                onClick={() => { document.getElementById('login-form').dispatchEvent(new Event('submit')); }}
                size="lg"
                color="primary"
                isBlock
              >
                ログイン
              </Button>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default AuthForm;

AuthForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
