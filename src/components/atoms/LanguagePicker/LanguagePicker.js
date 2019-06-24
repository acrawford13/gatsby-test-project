import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { availableLanguages } from '../../../constants.js';

const LanguagePicker = ({ translations, currentLanguage }) => {
  if (!translations || !translations.length) return false;
  return (
    <ul className="language-picker">
      {Object.keys(availableLanguages).map(language => {
        if (currentLanguage === language) {
          return (
            <li key={currentLanguage} className="language-picker__option language-picker__option--selected">
              {availableLanguages[currentLanguage]}
            </li>
          );
        }

        const translatedPage = translations.find(translation => translation.frontmatter.language === language);
        if (translatedPage) {
          return (
            <li key={translatedPage.frontmatter.language} className="language-picker__option">
              <Link to={translatedPage.fields.slug}>{availableLanguages[translatedPage.frontmatter.language]}</Link>
            </li>
          );
        }

        return null;
      })}
    </ul>
  );
};

LanguagePicker.propTypes = {
  translations: PropTypes.arrayOf(
    PropTypes.shape({
      frontmatter: PropTypes.shape({
        language: PropTypes.string.isRequired,
      }).isRequired,
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ),
  currentLanguage: PropTypes.string.isRequired,
};

export default LanguagePicker;
