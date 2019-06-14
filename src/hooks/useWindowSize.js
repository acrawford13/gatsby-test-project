import { useState, useRef, useEffect } from 'react';

function useWindowSize() {
  if (typeof window === 'undefined') return;
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const resizeTimeout = useRef();

  function handleResize() {
    clearTimeout(resizeTimeout.current);
    resizeTimeout.current = setTimeout(
      () => setWindowSize({ width: window.innerWidth, height: window.innerHeight }),
      600,
    );
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(resizeTimeout.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

export default useWindowSize;
