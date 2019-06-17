import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { availableLanguages } from '../../../constants.js';

const LanguagePicker = ({ translations, currentLanguage }) => {
  if (!translations || !translations.length) return false;
  return (
    <ul className="language-picker">
      <li key={currentLanguage} className="language-picker__option language-picker__option--selected">
        {availableLanguages[currentLanguage]}
      </li>
      {translations.map(translation => {
        return (
          <li key={translation.frontmatter.language} className="language-picker__option">
            <Link to={translation.fields.slug}>{availableLanguages[translation.frontmatter.language]}</Link>
          </li>
        );
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
