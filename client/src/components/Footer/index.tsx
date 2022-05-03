import FooterBubbles from './FooterBubbles';
import './Footer.css';
import FooterLinks from './FooterLinks';

const Footer = () => (
  <footer>
    <div className="footer-bubbles">{FooterBubbles}</div>
    <div className="footer-content">
      <FooterLinks />
      <h3>&copy; Cheong & Ceron</h3>
    </div>
  </footer>
);

export default Footer;
