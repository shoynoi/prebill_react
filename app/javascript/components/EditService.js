import React from 'react';
import PropTypes from 'prop-types';
import ServiceForm from './ServiceForm';
import getCsrfToken from '../helpers/getCsrfToken';
import PageHeader from './PageHeader';
import PageHeaderTitle from './PageHeaderTitle';
import LinkButton from './LinkButton';

class EditService extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      service: null,
      errorMessages: [],
    };

    this.updateService = this.updateService.bind(this);
  }

  componentDidMount() {
    const { serviceId } = this.props;
    fetch(`/services/${serviceId}/edit.json`, {
      method: 'GET',
      credentials: 'same-origin',
    })
      .then((response) => {
        response.json()
          .then((service) => {
            this.setState({ service });
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  updateService(editedService) {
    const { serviceId } = this.props;
    fetch(`/services/${serviceId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'X-CSRF-Token': getCsrfToken(),
      },
      credentials: 'same-origin',
      body: JSON.stringify(editedService),
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
    const { errorMessages, service } = this.state;

    if (service === null) return null;

    return (
      <div>
        <PageHeader>
          <PageHeaderTitle>サービス修正</PageHeaderTitle>
          <div className="page-header__action">
            <LinkButton href="/" color="secondary" size="md">一覧</LinkButton>
          </div>
        </PageHeader>
        <ServiceForm
          service={service}
          onSubmit={this.updateService}
          errorMessages={errorMessages}
          action="update"
        />
      </div>
    );
  }
}

export default EditService;

EditService.propTypes = {
  serviceId: PropTypes.string,
};

EditService.defaultProps = {
  serviceId: '',
};
