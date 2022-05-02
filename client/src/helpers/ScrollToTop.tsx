import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

interface ScrollProps {
  children: React.FunctionComponent;
}

const ScrollToTop = (props: ScrollProps) => {
  console.log(props);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
