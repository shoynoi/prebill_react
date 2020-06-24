import React from 'react';

class Flash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flash: {},
    };
  }

  componentDidMount() {
    fetch('/api/flash', {
      method: 'GET',
    })
      .then((response) => {
        response.json()
          .then((message) => {
            this.setState({
              flash: message,
            });
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { flash } = this.state;
    const type = Object.keys(flash)[0];
    const message = Object.values(flash)[0];

    if (Object.keys(flash).length === 0) {
      return null;
    }

    return (
      <div className={`flash flash--${type}`}>
        <p className="flash__message">
          {message}
        </p>
      </div>
    );
  }
}

export default Flash;
