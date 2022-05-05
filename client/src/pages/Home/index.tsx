import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {

    const HomeButton = (
        <Link to="/products">
            <button>
                Light it up!
            </button>
        </Link>
    )

    return (
        <div className="home-container">
            <div className="left-content">
                <p className="stay-home">You just got lit up</p>
                <h1>Glowzo Candles</h1>
                <p>Light up the world, one candle at a time...</p>
                {HomeButton}
            </div>
        </div>
    )
}

export default Home