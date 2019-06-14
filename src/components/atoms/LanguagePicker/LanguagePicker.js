import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const languages = {
  en: 'English',
  pt: 'Portuguese',
};

const LanguagePicker = ({ translations }) => (
  <ul className="language-picker">
    {Object.keys(languages).map(langKey => {
      if (!translations[langKey]) return;
      if (translations[langKey].selected) {
        return (
          <li key={langKey} className="language-picker__option language-picker__option--selected">
            {languages[langKey]}
          </li>
        );
      }
      return (
        <li key={langKey} className="language-picker__option">
          <Link to={translations[langKey].fields.slug}>{languages[langKey]}</Link>
        </li>
      );
    })}
  </ul>
);

LanguagePicker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      langKey: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selected: PropTypes.string.isRequired,
};

export default LanguagePicker;
