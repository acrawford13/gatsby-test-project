import React from 'react';

const PageHeading = ({ title, subtitle }) => (
  <div className="page-heading">
    {title && <h1 className="page-heading__title">{title}</h1>}
    {subtitle && <h2 className="page-heading__subtitle">{subtitle}</h2>}
  </div>
);

export default PageHeading;
