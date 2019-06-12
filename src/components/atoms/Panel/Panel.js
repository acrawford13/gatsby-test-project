import React from 'react';

const Panel = ({ heading, children }) => (
  <div className="panel">
    <h3 className="panel__heading">{heading}</h3>
    {children}
  </div>
);

export default Panel;
