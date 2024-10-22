import '../styles/portfolio.css';
import Portfolio from '../components/project';
import { Carousel } from 'react-materialize';


const PortfolioPage = () => {
    return (
        <>
            <div className='portfolio-page'>
                <div className='portfolio'>
                    <h1>PROJECTS</h1>
                </div>
                <div className='project-display'>
                    <Portfolio 
                    
                    />
                </div>
            </div>
        </>
    )
}

export default PortfolioPage;