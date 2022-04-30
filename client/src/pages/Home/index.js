import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {

    const HomeButton = (
        <button>
            <Link to="/products">
                Light it up!
            </Link>
        </button>
    )
    
    return (
        <div class="home-container">
            <div class="left-content">
                <p class="stay-home">You just got lit up</p>
                <h1>Glowzo Candles</h1>
                <p>Light up the world, one candle at a time...</p>
                {HomeButton}
            </div>
        </div>
    )
}

export default Home