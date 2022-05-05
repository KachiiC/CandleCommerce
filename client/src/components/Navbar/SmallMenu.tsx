import SmallMenuLinks from './SmallMenuLinks';
import AuthenticationButton from './AuthenticationButton';

interface SmallMenuProps {
  toggleMenu: () => void;
}

const SmallMenu = ({ toggleMenu }: SmallMenuProps) => (
  <div className="small-menu">
    <SmallMenuLinks toggleMenu={toggleMenu} />
    <AuthenticationButton type="small" />
  </div>
);

export default SmallMenu;
