import '../styles/portfolio.css';
import Portfolio from '../components/project';

const PortfolioPage = () => {
    return (
        <>
        <div className='portfolio'>
            <h1>PORTFOLIO</h1>
        </div>
        <div className='project-display'>
         <Portfolio />
         </div>
        </>
    )
}

export default PortfolioPage;