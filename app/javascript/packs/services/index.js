import React from 'react';
import { render } from 'react-dom';
import UsingServices from '../../components/UsingServices';
import Flash from '../../components/Flash';
import getCsrfToken from '../../helpers/getCsrfToken';
import TotalPriceList from '../../components/TotalPriceList';
import App from '../application/app';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: null,
    };

    this.deleteService = this.deleteService.bind(this);
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

  deleteService(serviceId) {
    const confirm = window.confirm('本当に削除しますか?');
    if (confirm) {
      fetch(`/services/${serviceId}`, {
        method: 'DELETE',
        headers: {
          'X-CSRF-TOKEN': getCsrfToken(),
        },
        credentials: 'same-origin',
      })
        .then((response) => {
          if (response.ok) {
            window.message = { notice: 'サービスを削除しました。' };
            const { services } = this.state;
            this.setState({
              services: services.filter((service) => serviceId !== service.id),
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  render() {
    const { services } = this.state;

    if (services === null) {
      return null;
    }

    return (
      <App>
        <Flash services={services} />
        <main className="page">
          <TotalPriceList services={services} />
          <UsingServices onDelete={this.deleteService} services={services} />
        </main>
      </App>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Index />,
    document.querySelector('#root'),
  );
});
