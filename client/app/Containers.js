import React from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

class ContainerItemMount extends React.Component {
  render() {
    var m = this.props.mount
    return <p> {m.Source + ":" + m.Destination + ":" + m.Mode} </p> 
  }
}

class ContainerItem extends React.Component {
  render() {
    var containerInfo = this.props.container;
    return <tr>
      <td>{ containerInfo.Id.substring(0,16) }</td>
      <td>{ containerInfo.State }</td>
      <td>{ containerInfo.Image }</td>
      <td>{ containerInfo.Mounts.map( (m) => { return <ContainerItemMount key={m.Source} mount={m} />})}</td>
      <td>{ containerInfo.Status }</td>
    </tr>

  }
}

class Containers extends React.Component {
  constructor() {
    super();
    this.state={containers:  []}
  }

  componentDidMount() {
    axios.get("http://localhost:3000/containers").then( (resp) => {
      this.setState( (state) => {
        return {containers: resp.data}
      })
    })
  }

  render() {
    return (
      <div className="well">
        <Table  striped bordered condensed hover>
         <thead>
            <tr>
              <th>ID</th>
              <th>State</th>
              <th>Image</th>
              <th>Volumes</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            { this.state.containers.map((container) => {
              return <ContainerItem key={container.Id} container={ container } />
            }) }
        </tbody>
        </Table>
      </div>
    )
  }
}


export default Containers;
