import React from 'react';
import Button from 'react-bootstrap/lib/Button';


class Layout extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}


export default Layout;
