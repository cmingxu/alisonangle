import React from 'react';
import axios from 'axios';
import { Table, Panel } from 'react-bootstrap';

class SlaveItem extends React.Component {
  render() {
    var slave = this.props.slave;

    return <tr>
      <td> {slave.id} </td>
      <td> {slave.pid} </td>
      <td> {slave.port} </td>
      <td> {slave.registration_time} </td>
      <td> {slave.resources.cpu} </td>
    </tr>
  }
}

class MesosInfoItem extends React.Component {
  render() {
    var key = this.props.key;
    var value = this.props.value;

    return <p>
      <span className="value"> { value } </span>
    </p>
  }
}

class FrameworkItem extends React.Component {
  render() {
    var framework = this.props.framework;
    return <tr>
      <td> {framework.id} </td>
      <td> {framework.name} </td>
      <td> {framework.active} </td>
      <td> {framework.principle} </td>
      <td> {framework.tasks.length} </td>
    </tr>
  }
}

class MesosState extends React.Component {
  constructor() {
    super()
    this.state = {mesos: {frameworks: [], completed_frameworks: [], slaves: []}}
  }

  componentWillMount() {
    axios.get("http://localhost:3000/state").then( (resp) => {
      this.setState( (state) => {
        console.log(resp.data);
        return {mesos: resp.data}
      })
    })
  }

  render() {
    return (
      <div>
      <Panel header={"Mesos (" + this.state.mesos.version + "-" + this.state.mesos.build_time + " )"}>
        <MesosInfoItem key= "hostname" value = { this.state.mesos.hostname } />
        <MesosInfoItem key= "leader" value = { this.state.mesos.leader } />
        <MesosInfoItem key= "election_time" value = { this.state.mesos.election_time } />
      </Panel>

      <Panel header="Frameworks">
        <Table  striped bordered condensed hover>
         <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Active</th>
              <th>Principle</th>
              <th>Tasks</th>
            </tr>
          </thead>
          <tbody>
            { this.state.mesos.frameworks.map((framework) => {
              return <FrameworkItem key={framework.id} framework={ framework } />
            }) }
        </tbody>
        </Table>
      </Panel>

      <Panel header="Completed Frameworks">
        <Table  striped bordered condensed hover>
         <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Active</th>
              <th>Principle</th>
              <th>Tasks</th>
            </tr>
          </thead>
          <tbody>
            { this.state.mesos.completed_frameworks.map((framework) => {
              return <FrameworkItem key={framework.id} framework={ framework } />
            }) }
        </tbody>
        </Table>
      </Panel>

      <Panel header="Slaves">
        <Table  striped bordered condensed hover>
         <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Hostname</th>
              <th>Resources</th>
              <th>Tasks</th>
            </tr>
          </thead>
          <tbody>
            { this.state.mesos.slaves.map((slave) => {
              return <SlaveItem key={slave.id} slave={ slave } />
            }) }
        </tbody>
        </Table>
      </Panel>
      </div>
    )
  }
}

export default MesosState;
