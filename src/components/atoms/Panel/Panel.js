import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

const Panel = ({ heading, children, headingImageUrl, withHeadingColor }) => {
  let imageUrl;
  if (headingImageUrl) {
    const allImages = useStaticQuery(graphql`
      query AllImages {
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

  return (
    <div className="panel">
      {imageUrl && <div className="panel__image" style={{ backgroundImage: `url(${imageUrl})` }} />}
      {heading && <h3 className={`panel__heading ${withHeadingColor ? 'panel__heading--primary' : ''}`}>{heading}</h3>}
      <div className="panel__content">{children}</div>
    </div>
  );
};

Panel.propTypes = {
  headingImageUrl: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  heading: PropTypes.string,
  withHeadingColor: PropTypes.bool,
};

export const PanelWrapper = ({ children }) => <div className="panel__wrapper">{children}</div>;

PanelWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Panel;
