import React from 'react';
import { Link } from 'react-router';

class Sitebar extends React.Component {
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
