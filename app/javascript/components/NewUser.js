import React from 'react';
import getCsrfToken from '../helpers/getCsrfToken';
import AuthForm from './AuthForm';
import AuthFormHeader from './AuthFormHeader';

class NewUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessages: [],
    };

    this.createUser = this.createUser.bind(this);
  }

  createUser(newUser) {
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'X-CSRF-Token': getCsrfToken(),
      },
      credentials: 'same-origin',
      body: JSON.stringify(newUser),
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = '/';
        } else {
          response.json()
            .then((errorMessages) => {
              this.setState({ errorMessages });
            });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { errorMessages } = this.state;
    return (
      <>
        <h1 className="auth-form-logo">PreBill</h1>
        <div className="auth-form">
          <AuthFormHeader>アカウント作成</AuthFormHeader>
          <AuthForm onSubmit={this.createUser} errorMessages={errorMessages} />
          <footer className="auth-form__footer">
            <nav className="auth-form-nav">
              <ul className="auth-form-nav__items">
                <li className="auth-form-nav__item">
                  <a href="/" className="auth-form-nav__link">トップページ</a>
                </li>
                <li className="auth-form-nav__item">
                  <a href="/login" className="auth-form-nav__link">ログイン</a>
                </li>
              </ul>
            </nav>
          </footer>
        </div>
      </>
    );
  }
}

export default NewUser;
