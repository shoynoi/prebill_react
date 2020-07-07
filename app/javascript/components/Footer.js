import React from 'react';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-nav">
        <div className="footer-nav__items">
          <div className="footer-nav__item">
            {/* TODO 利用規約を作成したらリンクを修正 */}
            <span className="footer-nav__link">利用規約</span>
          </div>
          <div className="footer-nav__item">
            {/* TODO プライバシーポリシーを作成したらリンクを修正 */}
            <span className="footer-nav__link">プライバシーポリシー</span>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <small>
          <span className="footer-copyright__author">shoynoi</span>
          <span>{new Date().getFullYear()}</span>
        </small>
      </div>
    </div>
  </footer>
);

export default Footer;
