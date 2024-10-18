import '../styles/footer.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
      <div className='app-footer'>
        <Link to='https://github.com/m-beke'>Github</Link>
        <Link to='https://www.linkedin.com/in/matt-beke-a3679740/'>LinkedIn</Link>
      </div>
    );
  }

  export default Footer;