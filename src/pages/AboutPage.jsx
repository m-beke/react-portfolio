import '../styles/about.css';
import profilePic from "../assets/images/IMG_1448.jpg";
import { Link } from "react-router-dom";
import { Icon } from 'react-materialize';
import { Pagination } from 'react-materialize';
import { PaginationButton } from 'react-materialize';

function AboutPage() {
  return (
    <>
      <Pagination
        activePage={2}
        items={3}
        leftBtn={<Icon>chevron_left</Icon>}
        maxButtons={3}
        rightBtn={<Icon>chevron_right</Icon>}
        
      />
    </>
  );
}

export default AboutPage;