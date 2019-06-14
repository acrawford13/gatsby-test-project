import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const LanguagePicker = ({ translations, langKey }) => {
  console.log('translations:', translations);
  return (
    <ul className="language-picker">
      <li key={langKey} className="language-picker__option language-picker__option--selected">
        <Link>English</Link>
      </li>
      {translations.map(option => (
        <li
          key={option.langKey}
          className={`language-picker__option${option.selected ? ' language-picker__option--selected' : ''}`}
        >
          <Link to={option.fields.slug}>{option.language}</Link>
        </li>
      ))}
    </ul>
  );
};

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
