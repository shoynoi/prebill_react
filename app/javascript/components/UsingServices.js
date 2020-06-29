import React from 'react';
import ServiceList from './ServiceList';
import ServiceItem from './ServiceItem';

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
          <ServiceList>
            {services.map((service) => <ServiceItem service={service} key={service.id} />)}
          </ServiceList>
        </div>
      </div>
    );
  }
}

export default UsingServices;
