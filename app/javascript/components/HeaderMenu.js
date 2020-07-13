import React from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import deleteSession from '../helpers/authentication';

class HeaderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  handleClickOutside() {
    this.setState({ isOpen: false });
  }

  render() {
    const { user } = this.props;
    const { isOpen } = this.state;

    if (!user) return null;

    return (
      <div className="header-menu">
        <div className="header-menu__label">
          <button
            type="button"
            className="header-menu__button"
            onClick={this.toggleDropdown}
          >
            {user.name}
          </button>
        </div>
        {
          isOpen
            && (
            <div className="header-dropdown">
              <ul className="header-dropdown__items">
                <li className="header-dropdown__item">
                  <a href="/my_account/edit" className="header-dropdown__link">ユーザー設定</a>
                </li>
                <li className="header-dropdown__item">
                  <button
                    type="button"
                    className="header-dropdown__link"
                    onClick={() => deleteSession()}
                  >
                    ログアウト
                  </button>
                </li>
              </ul>
            </div>
            )
        }
      </div>
    );
  }
}

export default onClickOutside(HeaderMenu);

HeaderMenu.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};
