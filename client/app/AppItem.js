import React from 'react';

class AppItem extends React.Component {
  constructor() {
    super()
    this.state = { }
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUmount() {
    console.log('componentDidUmount');
  }

  render() {
    return (
      <span > foobar {this.props.itemName} </span>
    )
  }
}


export default AppItem;
