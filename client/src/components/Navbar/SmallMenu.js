import SmallMenuLinks from './SmallMenuLinks';
import AuthenticationButton from './AuthenticationButton';

const SmallMenu = ({ click }) => (
  <div className="small-menu">
    <SmallMenuLinks click={click} />
    <AuthenticationButton type="small" />
  </div>
);

export default SmallMenu;
