import React, { useRef, useState, useEffect } from 'react';
import useWindowSize from '../../../hooks/useWindowSize';

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
  }, [children, windowSize.width]);

  return (
    <div className={`panel ${isCollapsed && 'panel--collapsed'}`}>
      <h3 className="panel__heading">{heading}</h3>
      <div className="panel__content" ref={measuredRef}>
        {children}
      </div>
      {isCollapsible && isCollapsed && (
        <span className="panel__toggle" onClick={() => setIsCollapsed(false)}>
          {'Read more'}
        </span>
      )}
      {isCollapsible && !isCollapsed && (
        <span className="panel__toggle" onClick={() => setIsCollapsed(true)}>
          {'Read less'}
        </span>
      )}
    </div>
  );
};

export const PanelWrapper = ({ children }) => <div className="panel__wrapper">{children}</div>;

export default Panel;
