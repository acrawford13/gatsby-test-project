import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const ActionButton = ({ label, link, download, iconUrl, float, right }) => {
  let imageUrl;
  if (iconUrl) {
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

    const image = allImages.allImageSharp.edges.find(edge => edge.node.fluid.originalName === iconUrl);
    imageUrl = image && image.node.fluid.src;
  }
  return (
    <a
      className={`action-button ${float ? (right ? 'action-button--float-right' : 'action-button--float-left') : ''}`}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      download={download}
    >
      <div>
        {imageUrl && <img className="action-button__icon" src={imageUrl} />}
        {label && <span className="action-button__label">{label}</span>}
      </div>
    </a>
  );
};

export default ActionButton;
