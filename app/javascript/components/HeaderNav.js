import React from 'react';
import AccountNav from './AccountNav';
import UserNav from './UserNav';

class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch('/my_account.json', {
      method: 'GET',
      credentials: 'same-origin',
    })
      .then((response) => {
        if (response.status === 200) {
          response.json()
            .then((user) => {
              this.setState({ user, isLoaded: true });
            });
        } else {
          this.setState({ isLoaded: true });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { user, isLoaded } = this.state;
    const { services } = this.props;

    if (isLoaded === false) {
      return null;
    }

    return (
      <nav className="header-nav">
        {user
          ? <UserNav user={user} services={services} />
          : <AccountNav />}
      </nav>
    );
  }
}

export default HeaderNav;
