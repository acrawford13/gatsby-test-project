import React from 'react';
import Parser from 'html-react-parser';

import PropTypes from 'prop-types';

import Layout from '../components/layout/Layout';
import PageHeading from '../components/molecules/PageHeading/PageHeading';
import Content, { HTMLContent } from '../components/Content';
import { graphql } from 'gatsby';
import Panel, { PanelWrapper } from '../components/atoms/Panel/Panel';
import CollapsiblePanel from '../components/atoms/CollapsiblePanel/CollapsiblePanel';
import TextWithDefinitions from '../components/TextWithDefinitions';
import Abbr from '../components/atoms/Abbr/Abbr';

const myParser = ({ definitions, html }) => {
  const abbrRegex = new RegExp(
    `(${definitions
      .filter(t => t.source && t.meaning)
      .map(t => t.source)
      .join('|')})`,
    'g',
  );
  return Parser(html.replace(abbrRegex, `<abbr>$1</abbr>`), {
    replace: domNode => {
      if (domNode.name === 'abbr') {
        if (!domNode.children || !domNode.children[0]) return domNode;
        const text = domNode.children[0].data;
        return <Abbr title={definitions.find(t => t.source === text).meaning}>{text}</Abbr>;
      }
    },
  });
};

export const GuidesTemplate = ({
  title,
  subtitle,
  body,
  definitions,
  alternate_languages,
  current_language,
  sidebar,
}) => {
  return (
    <Layout current_language={current_language} alternate_languages={alternate_languages} sidebar={sidebar}>
      <>
        <PageHeading title={title} subtitle={subtitle} />
        {body.map(slice => {
          switch (slice.slice_type) {
            case 'collapsible_panel_section':
              return (
                <PanelWrapper>
                  {slice.items.map(item => (
                    <CollapsiblePanel
                      key={item.heading.text}
                      headingImageUrl={item.image.url}
                      heading={item.heading.text}
                    >
                      {myParser({ definitions, html: item.content.text })}
                    </CollapsiblePanel>
                  ))}
                </PanelWrapper>
              );
            case 'level_1_heading':
              return (
                <h1 id={slice.primary.heading.text.toLowerCase().replace(/\s/g, '-')}>
                  {myParser({ definitions, html: slice.primary.heading.text })}
                </h1>
              );
            case 'level_2_heading':
              return (
                <h2 id={slice.primary.heading.text.toLowerCase().replace(/\s/g, '-')}>
                  {myParser({ definitions, html: slice.primary.heading.text })}
                </h2>
              );
            case 'text':
              return myParser({ definitions, html: slice.primary.content.html });
          }
        })}
      </>
    </Layout>
  );
};

GuidesTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
};

class Guides extends React.Component {
  render() {
    const { prismicGuide: post } = this.props.data;
    return (
      // <Layout post={post} translations={[]}>
      <GuidesTemplate
        title={post.content.title.text}
        subtitle={post.content.subtitle.text}
        body={post.content.body}
        definitions={post.content.definition}
        sidebar={post.sidebar}
        alternate_languages={post.alternate_languages}
        current_language={post.lang}
      />
      // </Layout>
    );
  }
}

Guides.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      code: PropTypes.shape({
        body: PropTypes.string.isRequired,
      }).isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        translations: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }).isRequired,
            frontmatter: PropTypes.shape({
              language: PropTypes.string.isRequired,
            }).isRequired,
          }),
        ),
      }),
      tableOfContents: PropTypes.shape({
        items: PropTypes.arrayOf(
          PropTypes.shape({
            url: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
          }),
        ),
      }),
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query GuideById($id: String!) {
    prismicGuide(id: { eq: $id }) {
      id
      alternate_languages {
        lang
      }
      lang
      sidebar: data {
        body {
          ... on PrismicGuideBodyLevel2Heading {
            id
            slice_type
            primary {
              heading {
                text
              }
            }
          }
          ... on PrismicGuideBodyLevel1Heading {
            id
            slice_type
            primary {
              heading {
                text
              }
            }
          }
        }
      }
      content: data {
        title {
          text
        }
        subtitle {
          text
        }
        body {
          ... on PrismicGuideBodyCollapsiblePanelSection {
            id
            slice_type
            items {
              heading {
                text
              }
              content {
                text
              }
              image {
                url
              }
            }
          }
          ... on PrismicGuideBodyLevel2Heading {
            id
            slice_type
            primary {
              heading {
                text
              }
            }
          }
          ... on PrismicGuideBodyLevel1Heading {
            id
            slice_type
            primary {
              heading {
                text
              }
            }
          }
          ... on PrismicGuideBodyText {
            id
            slice_type
            primary {
              content {
                html
              }
            }
          }
        }
        definition {
          source
          meaning
        }
      }
    }
  }
`;

export default Guides;
