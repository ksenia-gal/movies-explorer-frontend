import React from 'react';

export function useScreenWidth() {
  const getScreenWidth = React.useCallback(() => window.innerWidth, []);
  const [screenWidth, setScreenWidth] = React.useState(getScreenWidth());

  React.useEffect(() => {
    function handleResize() {
      let resizeTimer;
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setScreenWidth(getScreenWidth());
      }, 700);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [getScreenWidth]);

  return screenWidth;
}
