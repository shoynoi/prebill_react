import React from 'react';
import getCsrfToken from '../helpers/getCsrfToken';
import AccountForm from './AccountForm';
import AuthFormFooter from './AuthFormFooter';
import AuthFormFooterLink from './AuthFormFooterLink';
import PageHeader from './PageHeader';
import PageHeaderTitle from './PageHeaderTitle';
import LinkButton from './LinkButton';

class EditUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      errorMessages: [],
    };

    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    fetch('/my_account.json', {
      method: 'GET',
      credentials: 'same-origin',
    })
      .then((response) => {
        response.json()
          .then((currentUser) => {
            this.setState({ currentUser });
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  updateUser(editedUser) {
    fetch('/my_account', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'X-CSRF-Token': getCsrfToken(),
      },
      credentials: 'same-origin',
      body: JSON.stringify(editedUser),
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
    const { errorMessages, currentUser } = this.state;

    if (currentUser === null) return null;

    return (
      <>
        <PageHeader>
          <PageHeaderTitle>ユーザー設定</PageHeaderTitle>
          <div className="page-header__action">
            <LinkButton href="/" color="secondary" size="md">一覧</LinkButton>
          </div>
        </PageHeader>
        <div className="auth-form--is-update">
          <AccountForm
            onSubmit={this.updateUser}
            errorMessages={errorMessages}
            action="update"
            user={currentUser}
          />
          <AuthFormFooter>
            <AuthFormFooterLink href="/">トップページ</AuthFormFooterLink>
            {/* TODO アカウント削除ページを作成する */}
            <AuthFormFooterLink href="/close">アカウント削除</AuthFormFooterLink>
          </AuthFormFooter>
        </div>
      </>
    );
  }
}

export default EditUser;
