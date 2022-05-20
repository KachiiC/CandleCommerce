import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import NavLinksData, { unauthedLinks } from './NavLinksData';

const NavLinks = () => {
  const { isAuthenticated } = useAuth0();

  const linksLogic = isAuthenticated ? NavLinksData : unauthedLinks;

  const displayLinks = linksLogic.map(nav => (
    <div className="nav-link" key={nav.path}>
      <Link to={`/${nav.path}`}>{nav.path.toUpperCase()}</Link>
    </div>
  ));
  return <>{displayLinks}</>;
};

export default NavLinks;
