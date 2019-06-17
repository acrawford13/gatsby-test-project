import React from 'react';
import SEO from '../components/seo';
import '../index.scss';

const NotFoundPage = () => (
  <div className="layout">
    <div className="message-page">
      <div className="message-page__panel">
        <SEO title="404: Not found" />
        <h1>Not found</h1>
        <p>The page you're looking for couldn't be found</p>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
