import React from 'react';
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';

import '../../styles/InteractionLogs.css';
import BodyBackgroundColor from "react-body-backgroundcolor";
import { getInteractions } from '../../api/responses';

class InteractionLogs extends React.Component {
  state = {
    interactions: []
  }

  componentDidMount() {
    this.getAllInteractions();
  }

  getAllInteractions = () => {
    getInteractions().then((events) => {
      this.setState({interactions: events});
    });  
  }

  getResponsesTable() {
    const { interactions } = this.state;
    const rows = [];
    let rowNum = 1;

    interactions.forEach((e) => {
      rows.push(
        <tr key={`row_${rowNum}`}>
          <td>{rowNum}</td>
          <td>{e.emotion}</td>
          <td>{e.input}</td>
          <td>{e.response}</td>
        </tr>
      )
      rowNum++;
    });

    return (
      <div>
        <Table striped bordered hover className={"LogsTable"}>
          <thead>
            <tr>
              <th>#</th>
              <th>Emotion</th>
              <th>Child Input</th>
              <th>Beary's Response</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </Table>
      </div >
    );
  }

render() {
    return (
        <div>
            <BodyBackgroundColor backgroundColor='#fffef6'>
            </BodyBackgroundColor>
            <div className={"header"}>
                <Link to="/" className={"Links"}><h1>Beary</h1></Link>
            </div>
            <div className={"Navigation"}>
                <Link className={"NavLinks"} to="/configure"><h5> Configure </h5></Link>
                <Link className={"NavLinks"} to="/logs"><h5> Response Logs </h5></Link>
                <Link className={"NavLinks"} to="/interactionlogs"><h5> Interaction Logs </h5></Link>
            </div>
            <h4 className={"Headings"}>Interaction Logs</h4>

            <div>
              {this.getResponsesTable()}
            </div>
        </div>
    );
    }
}

export default InteractionLogs;