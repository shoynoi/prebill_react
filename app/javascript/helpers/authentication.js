import getCsrfToken from './getCsrfToken';

const deleteSession = () => {
  fetch('/logout', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'X-CSRF-Token': getCsrfToken(),
    },
    credentials: 'same-origin',
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = '/';
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

export default deleteSession;
