import React from 'react';
import ServiceForm from './ServiceForm';
import getCsrfToken from '../helpers/getCsrfToken';

class NewService extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessages: [],
    };

    this.createService = this.createService.bind(this);
  }

  createService(newService) {
    fetch('/services', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'X-CSRF-Token': getCsrfToken(),
      },
      credentials: 'same-origin',
      body: JSON.stringify(newService),
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
    const { errorMessages } = this.state;
    return (
      <div>
        <ServiceForm
          onSubmit={this.createService}
          errorMessages={errorMessages}
          action="create"
        />
      </div>
    );
  }
}

export default NewService;
