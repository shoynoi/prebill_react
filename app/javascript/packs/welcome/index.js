import React from 'react';
import { render } from 'react-dom';
import Welcome from '../application/welcome';
import Flash from '../../components/Flash';
import LinkButton from '../../components/LinkButton';
import mock from '../../../assets/images/mock.png';
import management from '../../../assets/images/management.svg';
import money from '../../../assets/images/money.svg';
import email from '../../../assets/images/email.svg';

const Index = () => (
  <Welcome>
    <Flash />
    <div className="welcome">
      <div className="container">
        <div className="firstview">
          <div className="firstview__items">
            <div className="firstview__content">
              <h1 className="firstview__title">
                PreBill
              </h1>
              <h2 className="firstview__subtitle">
                サブスクリプション管理アプリ
              </h2>
              <div className="firstview__signup">
                <LinkButton color="primary" href="/signup" size="lg">アカウント作成(無料)</LinkButton>
              </div>
            </div>
            <div className="firstview__image">
              <img src={mock} alt="mock" />
            </div>
          </div>
        </div>
      </div>
      <div className="welcome__section">
        <div className="welcome__features">
          <div className="welcome-feature">
            <div className="welcome-feature__image">
              <img src={management} alt="management" />
            </div>
            <div className="welcome-feature__body">
              <h1 className="welcome-feature__header">
                サブスクを一元管理
              </h1>
              <p className="welcome-feature__description">利用中のサービスの料金や更新時期をまとめて管理できます。</p>
            </div>
          </div>
          <div className="welcome-feature">
            <div className="welcome-feature__image">
              <img src={money} alt="money" />
            </div>
            <div className="welcome-feature__body">
              <h1 className="welcome-feature__header">
                利用額が
                <br className="welcome-feature__break" />
                一目でわかる
              </h1>
              <p className="welcome-feature__description">何にどれだけお金を使っているのかを一目で確認できます。</p>
            </div>
          </div>
          <div className="welcome-feature">
            <div className="welcome-feature__image">
              <img src={email} alt="email" />
            </div>
            <div className="welcome-feature__body">
              <h1 className="welcome-feature__header">
                更新が近づいたら
                <br className="welcome-feature__break" />
                メールでお知らせ
              </h1>
              <p className="welcome-feature__description">更新日が近づいたら設定した日にメールで通知されるので、うっかり更新されてしまうことを防ぎます。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Welcome>
);

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Index />,
    document.querySelector('#root'),
  );
});
