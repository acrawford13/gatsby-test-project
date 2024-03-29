import React, { useRef, useState, useEffect } from 'react';
import useWindowSize from '../../../hooks/useWindowSize';
import { IntlProvider, FormattedMessage } from 'react-intl';

const Panel = ({ heading, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const measuredRef = useRef(null);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (measuredRef.current !== null) {
      const isContentOverflowing = measuredRef.current.offsetHeight < measuredRef.current.scrollHeight;
      setIsCollapsible(isContentOverflowing);
    }
  }, [children, windowSize]);

  return (
    <div className={`panel ${isCollapsed ? 'panel--collapsed' : ''} ${isCollapsible ? 'panel--collapsible' : ''}`}>
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

export const PanelWrapper = ({ children }) => <div className="panel__wrapper">{children}</div>;

export default Panel;
