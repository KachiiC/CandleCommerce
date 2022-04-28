import instagram_icon from '../../media/instagram.png';
import facebook_icon from '../../media/facebook.png';
import favicon from '../../media/favicon.ico'
import { instagramUrl, facebookUrl } from '../../services/urls';


const NavHeader = () => (
    <div className='home_nav_left'>
        <div className='logo_icon_wrapper'>
            <h1 className="nav_left_title"><img className="logo_icon" src={favicon} alt="candle icon"></img></h1>
        </div>
        <div className="social_icons_wrapper">
            <a href={instagramUrl} >
                <img className="social_icons" src={instagram_icon} alt="instagram_icon" />
            </a>
            <a href={facebookUrl} >
                <img className="social_icons" src={facebook_icon} alt="facebook_icon" />
            </a>
        </div>
    </div>
)

export default NavHeader