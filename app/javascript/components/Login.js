import React from 'react';
import getCsrfToken from '../helpers/getCsrfToken';
import AuthFormHeader from './AuthFormHeader';
import AuthFormFooter from './AuthFormFooter';
import AuthFormFooterLink from './AuthFormFooterLink';
import AuthForm from './AuthForm';
import Flash from './Flash';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };

    this.createSession = this.createSession.bind(this);
  }

  createSession(params) {
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'X-CSRF-Token': getCsrfToken(),
      },
      credentials: 'same-origin',
      body: JSON.stringify(params),
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = '/';
        } else {
          window.message = { alert: 'ユーザー名かパスワードが正しくありません。' };
          this.setState({ hasError: true });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { hasError } = this.state;
    return (
      <>
        <h1 className="auth-form-logo">
          <a href="/" className="auth-form-logo__link">PreBill</a>
        </h1>
        <div className="auth-form">
          <AuthFormHeader>ログイン</AuthFormHeader>
          { hasError && <Flash /> }
          <AuthForm onSubmit={this.createSession} />
          <AuthFormFooter>
            <AuthFormFooterLink href="/">トップページ</AuthFormFooterLink>
            <AuthFormFooterLink href="/signup">アカウント作成</AuthFormFooterLink>
          </AuthFormFooter>
        </div>
      </>
    );
  }
}

export default Login;
