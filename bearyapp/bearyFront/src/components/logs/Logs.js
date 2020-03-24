import React from 'react';
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';

import '../../styles/Logs.css';
import BodyBackgroundColor from "react-body-backgroundcolor";
import { getResponses } from '../../api/responses';

class Logs extends React.Component {
  state = {
    responses: []
  }

  componentDidMount() {
    this.getAllResponses();
  }

  getAllResponses = () => {
    getResponses().then((events) => {
      this.setState({responses: events});
    });  
  }

  getResponsesTable() {
    const { responses } = this.state;
    const rows = [];
    let rowNum = 1;

    responses.forEach((e) => {
      e.responses.forEach((r) => {
        rows.push(
          <tr key={`row_${rowNum}`}>
            <td>{rowNum}</td>
            <td>{e.emotion}</td>
            <td>{r}</td>
          </tr>
        )
        rowNum++;
      })
    });

    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Emotion</th>
              <th>Response</th>
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
                <Link className={"NavLinks"} to="/logs"><h5> Logs </h5></Link>
            </div>
            <h4 className={"Headings"}>LOGS</h4>

            <div>
              {this.getResponsesTable()}
            </div>
        </div>
    );
    }
}

export default Logs;