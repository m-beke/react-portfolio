import '../styles/resume.css';
import html from '../assets/images/html5.svg';
import css from '../assets/images/css3.svg';
import javascript from '../assets/images/javascript.svg';
import nodeJS from '../assets/images/nodejs.svg';
import mongoDB from '../assets/images/mongodb.svg';
import mySQL from '../assets/images/mysql.svg';
import sequelize from '../assets/images/sequelize.svg';
import reactImg from '../assets/images/react.svg';
import pdf from "../assets/pdf/MB_Coding_Resume.pdf";

const ResumePage = () => {
    return (
        <>
            <div className='resume-bg'>
                <div className='resume'>
                    <h1>RESUME</h1>
                </div>

                <div className='resume-card'>
                    <div className='proficiency'>
                        <h2>PROFICIENT IN</h2>
                    </div>
                    <div className='language-icons'>
                        <img src={html}></img>
                        <img src={css}></img>
                        <img src={javascript}></img>
                        <img src={nodeJS}></img>
                        <img src={mySQL}></img>
                        <img src={sequelize}></img>
                        <img src={mongoDB}></img>
                        <img src={reactImg}></img>
                    </div>
                    <div className='language-titles'>
                        <h3>HTML5</h3>
                        <h3>CSS3</h3>
                        <h3>Javascript</h3>
                        <h3>Node.JS</h3>
                        <h3>MySQL</h3>
                        <h3>Sequelize</h3>
                        <h3>MongoDB</h3>
                        <h3>React</h3>
                    </div>
                </div>
                <div className='download-link'>
                    <a href={pdf} download="MB_Coding_Resume">DOWNLOAD</a>
                </div>
            </div>
        </>
    )
}

export default ResumePage;