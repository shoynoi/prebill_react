import React from 'react';

const LinkButton = ({ href, children }) => (
  <a href={href}>{children}</a>
);

export default LinkButton;
