import React from 'react';
import ServiceList from './ServiceList';

class UsingServices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: null,
    };
  }

  componentDidMount() {
    fetch('/services.json', {
      method: 'GET',
      credentials: 'same-origin',
    })
      .then((response) => {
        response.json()
          .then((services) => {
            this.setState({ services });
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { services } = this.state;

    if (services === null) {
      return null;
    }

    return (
      <div className="page-body">
        <h3 className="page-body__header">利用中のサービス</h3>
        <div className="page-body__actions">
          <a href="/services/new">新規登録</a>
        </div>
        <div className="page-body__inner">
          <div className="list-group">
            <div className="list-group__labels">
              <div className="list-group__label col-lg">サービス名</div>
              <div className="list-group__label col-sm">プラン</div>
              <div className="list-group__label col-sm">料金</div>
              <div className="list-group__label">更新日</div>
              <div className="list-group__label">通知日</div>
            </div>
            <div className="list-group__inner">
              <ServiceList services={services} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UsingServices;
