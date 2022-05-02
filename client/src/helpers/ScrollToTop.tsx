import React, { ReactNode } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

interface ScrollProps {
  children: React.FunctionComponent | ReactNode;
}

const ScrollToTop = (props: ScrollProps) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
