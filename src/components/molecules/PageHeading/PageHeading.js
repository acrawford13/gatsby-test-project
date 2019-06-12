import React from 'react';
import styled from 'styled-components';

import Heading from '../../atoms/typography/Heading/Heading';
import Subheading from '../../atoms/typography/Subheading/Subheading';

const PageHeading = ({ title, subtitle }) => (
  <div className="page-heading">
    {title && <h1 className="page-heading__title">{title}</h1>}
    {subtitle && <h2 className="page-heading__subtitle">{subtitle}</h2>}
  </div>
);

export default PageHeading;
