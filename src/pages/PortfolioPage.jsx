import '../styles/portfolio.css';
import flavorTrail from '../assets/images/flavor-trail-screenshot.png';
import streamScape from '../assets/images/streamscape-screenshot.png';
import chronos from '../assets/images/chronos-bg.png';

const PortfolioPage = () => {
    return (
        <>
        <div className='portfolio'>
            <h1>PORTFOLIO</h1>
        </div>
        <div className='projects'>
            <div className='project-card'>
            <a href="https://shawki45.github.io/Flavor-Trail/">Flavor Trail
                <img src={flavorTrail} alt="Flavor Trail Screenshot"></img>
            </a>
            </div>
            <div className='project-card'>
            <a href="https://still-oasis-92537-ca9b2c9be51c.herokuapp.com/">StreamScape
                <img src={streamScape} alt="StreamScape Screenshot"></img>
            </a>
            </div>
            <div className='project-card'>
            <a href="">Chronos
                <img src={chronos}></img>
            </a>
            </div>
        </div>
        </>
    )
}

export default PortfolioPage;