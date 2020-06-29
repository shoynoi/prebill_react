import React from 'react';

class ServiceList extends React.Component {
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
}

export default ServiceList;
