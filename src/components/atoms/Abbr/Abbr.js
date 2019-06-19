import React, { useState, useMemo, useEffect } from 'react';

const Abbr = ({ children, title }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mouseEnterPosition, setMouseEnterPosition] = useState({ x: 0, y: 0 });

  return (
    <>
      <abbr
        onMouseOut={() => setIsHovered(false)}
        onMouseOver={e => {
          if (isHovered) return;
          setIsHovered(true);
          setMouseEnterPosition({ x: e.clientX, y: e.clientY });
        }}
        onTouchStart={() => setIsHovered(false)}
        onTouchEnd={e => {
          if (isHovered || !e.targetTouches.length) return;
          setIsHovered(true);
          setMouseEnterPosition({ x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY });
        }}
      >
        {children}
      </abbr>
      {isHovered && (
        <span
          className="tooltip"
          style={{
            left: mouseEnterPosition.x,
            top: mouseEnterPosition.y,
          }}
        >
          {title}
        </span>
      )}
    </>
  );
};

export default Abbr;
