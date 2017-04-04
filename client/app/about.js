import React from 'react';
import { Link } from 'react-router';
import  style from '../css/bootstrap-theme.min.css';

class About extends React.Component {
  render() {
    return (
      <div>
      <span >About</span>
      <Link to="/apps" >link to apps </Link>
      </div>
    )
  }
}


export default About;
