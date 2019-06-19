import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = ({ name, maxWidth, ...props }) => {
  if (!name) return false;
  const allImages = useStaticQuery(graphql`
    query AllFluidImages {
      allImageSharp {
        edges {
          node {
            fluid(maxWidth: 800) {
              originalName
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  const image = allImages.allImageSharp.edges.find(edge => edge.node.fluid.originalName === name);
  const fluid = image && image.node.fluid;

  return (
    <div className="image-wrapper" style={{ maxWidth }}>
      <Img fluid={fluid} {...props} />
    </div>
  );
};

Image.propTypes = {
  name: PropTypes.string,
  maxWidth: PropTypes.string,
};

export default Image;
