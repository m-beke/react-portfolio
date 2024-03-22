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
                    <div className='language-icons'>
                        <div className='proficiency'>
                            <h2>PROFICIENT IN</h2>
                        </div>
                        <img src={html}></img>
                        <img src={css}></img>
                        <img src={javascript}></img>
                        <img src={nodeJS}></img>
                        <img src={mySQL}></img>
                        <img src={sequelize}></img>
                        <img src={mongoDB}></img>
                        <img src={reactImg}></img>
                    </div>
                </div>
                <div className='download-link'>
                    <a href={pdf} download="MB_Coding_Resume">Download</a>
                </div>
            </div>
        </>
    )
}

export default ResumePage;