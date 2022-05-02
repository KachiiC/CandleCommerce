import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import NavLinksData from './NavLinksData';

interface SmallMenuProps {
  toggleMenu: () => void;
}

const SmallMenuLinks = ({ toggleMenu }: SmallMenuProps) => {
  const { isAuthenticated } = useAuth0();

  const unauthedLinks = NavLinksData.filter(
    link => !link.authentication_required
  );

  // If unautheticated no access to authentication required pages.
  const linksLogic = isAuthenticated ? NavLinksData : unauthedLinks;

  const displaySmallLinks = linksLogic.map(nav => {
    return (
      <Link to={`/${nav.path}`} key={nav.path}>
        <div className="small-nav-link" onClick={toggleMenu}>
          {nav.path.toUpperCase()}
        </div>
      </Link>
    );
  });

  return <>{displaySmallLinks}</>;
};

export default SmallMenuLinks;
