import React, { useRef, useState, useEffect } from 'react';
import useWindowSize from '../../../hooks/useWindowSize';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const Panel = ({ heading, children, headingImageUrl }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const measuredRef = useRef(null);
  const windowSize = useWindowSize();

  let imageUrl;
  if (headingImageUrl) {
    const allImages = useStaticQuery(graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(maxWidth: 800) {
                src
                originalName
              }
            }
          }
        }
      }
    `);

    const image = allImages.allImageSharp.edges.find(edge => edge.node.fluid.originalName === headingImageUrl);
    imageUrl = image && image.node.fluid.src;
  }

  useEffect(() => {
    if (measuredRef.current !== null) {
      const isContentOverflowing = measuredRef.current.offsetHeight < measuredRef.current.scrollHeight;
      setIsCollapsible(isContentOverflowing);
    }
  }, [children, windowSize]);

  return (
    <div className={`panel ${isCollapsed ? 'panel--collapsed' : ''} ${isCollapsible ? 'panel--collapsible' : ''}`}>
      {imageUrl && <div className="panel__image" style={{ backgroundImage: `url(${imageUrl})` }} />}
      {heading && <h3 className="panel__heading">{heading}</h3>}
      <div className="panel__content" ref={measuredRef}>
        {children}
      </div>
      {isCollapsible && isCollapsed && (
        <span className="panel__toggle panel__toggle--read-more" onClick={() => setIsCollapsed(false)}>
          <FormattedMessage id="app.readMore" />
        </span>
      )}
      {isCollapsible && !isCollapsed && (
        <span className="panel__toggle" onClick={() => setIsCollapsed(true)}>
          <FormattedMessage id="app.readLess" />
        </span>
      )}
    </div>
  );
};

Panel.propTypes = {
  headingImageUrl: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  heading: PropTypes.string,
};

export const PanelWrapper = ({ children }) => <div className="panel__wrapper">{children}</div>;

PanelWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Panel;