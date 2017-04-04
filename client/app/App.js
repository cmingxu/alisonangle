import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      clickCount: 0,
      mesosState: null,
    }
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
    axios.get("http://localhost:3000/state").then( (resp) => {
      console.log(resp);
      this.setStat( (state) => {
        return {clickCount: state.clickCount, mesosState: resp}
      })
    })
  }

  componentDidUmount() {
    console.log('componentDidUmount');
  }

  handleClick() {
    this.setState(function (state) {
      return { clickCount: state.clickCount + 1}
    })
  }


  render() {
    let style = { 'backgroundColor': 'red', margin: 10, border: '1px solid black' };

    return (
      <div > foobar {this.state.clickCount} </div>
    )
  }
}


export default App;
