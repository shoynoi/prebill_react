import React from 'react';
import getCsrfToken from '../helpers/getCsrfToken';
import AuthForm from './AuthForm';
import AuthFormHeader from './AuthFormHeader';
import AuthFormFooter from './AuthFormFooter';
import AuthFormFooterLink from './AuthFormFooterLink';

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
          <AuthFormFooter>
            <AuthFormFooterLink href="/">トップページ</AuthFormFooterLink>
            <AuthFormFooterLink href="/login">ログイン</AuthFormFooterLink>
          </AuthFormFooter>
        </div>
      </>
    );
  }
}

export default NewUser;
