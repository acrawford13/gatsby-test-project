import React, { Component } from 'react';
import Parser from 'html-react-parser';
import Abbr from '../components/atoms/Abbr/Abbr';

class TextWithDefinitions extends Component {
  render() {
    const translations = [
      {
        key: 'Licença de Alojamento Local',
        value: 'Short Term Rental Permit',
      },
      {
        key: 'Balcão do Empreendedor',
        value: "Entrepreneur's Desk",
      },
    ];

    const abbrRegex = new RegExp(`(${translations.map(t => t.key).join('|')})`, 'g');
    return Parser(this.props.html.replace(abbrRegex, `<abbr>$1</abbr>`), {
      replace: domNode => {
        if (domNode.name === 'abbr') {
          if (!domNode.children || !domNode.children[0]) return domNode;
          const text = domNode.children[0].data;
          return <Abbr title={translations.find(t => t.key === text).value}>{text}</Abbr>;
        }
      },
    });
  }
}

export default TextWithDefinitions;
