import '../styles/portfolio.css';
import Portfolio from '../components/project';
import { Fade } from 'react-awesome-reveal';

const PortfolioPage = () => {
    return (
        <>
        <div className='portfolio-wrapper'>
            <div className='portfolio-page'>
                <Fade
                direction='down'>
                <div className='portfolio'>
                    <h1>Projects</h1>
                </div>
                </Fade>
                <div className='project-display'>
                    <Portfolio/>
                </div>
            </div>
            </div>
        </>
    )
}

export default PortfolioPage;