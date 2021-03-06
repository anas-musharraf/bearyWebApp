import React from 'react';
import { Link } from "react-router-dom";
import '../../styles/Configure.css';
import BodyBackgroundColor from "react-body-backgroundcolor";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import { addResponse } from '../../api/responses';

class Configure extends React.Component {
    state = {
      emotion: "Happy",
      text: "",
      alert: null,
      hasAlert: false
    }

    inputText = (event) => {
      this.setState({ text: event.target.value});
      console.log(event.target.value)
    }

    inputEmotion = (event) => {
      this.setState({ emotion: event.target.value});
      console.log(event.target.value);

    }

    onSave = () => {
      const { emotion, text} = this.state;
      const response = {
        emotion: emotion,
        text: text
      }

      const successAlert = 
        <Alert variant="success" onClose={() => this.setState({hasAlert: false})} dismissible>
          <Alert.Heading>Successfully saved the response!</Alert.Heading>
        </Alert>

      addResponse(response).then(e => {
          this.setState({alert: successAlert})
      });
      this.setState({hasAlert: true})
    }

  render() {
    const {hasAlert, alert} = this.state;
    console.log(this.state)
    return (
      <div>
      <BodyBackgroundColor backgroundColor='#fffef6'>
      </BodyBackgroundColor>
      <div className={"header"}>
        <Link to="/" className={"Links"}><h1>Beary</h1></Link>
      </div>
      <div className={"Navigation"}>
          <Link className={"NavLinks"} to="/configure"><h5> Configure </h5></Link>
          <Link className={"NavLinks"} to="/logs"><h5> Responses </h5></Link>
          <Link className={"NavLinks"} to="/interactionlogs"><h5> Interaction Logs </h5></Link>
      </div>

      <div>
        {hasAlert && alert}
      </div>
      
      <h4 className="Headings">Configure</h4>
      
      <div className="Form">
      <Form>
          <Form.Group as={Form.Row} className="FormRow">
              <Form.Label column sm={2} className="FormCol">
                  <h5>Emotion</h5>
              </Form.Label>
              <Form.Label column sm={2} className="FormCol">
                  <h5>Response</h5>
              </Form.Label>
          </Form.Group>
          <Form.Group as={Form.Row} className="FormRow">
              <Col sm={2} className="FormCol">
                  <Form.Control as="select" onChange={this.inputEmotion}>
                    <option>Happy</option>
                    <option>Angry</option>
                    <option>Excited</option>
                    <option>Sad</option>
                    <option>Fear</option>
                    <option>Bored</option>
                    <option>indifferent</option>
                  </Form.Control>
              </Col>
              <Col sm={{ span: 10, offset: 2 }} className="FormCol">
                  <Form.Control type="text" placeholder="Lets sing a song!" 
                  onInput={this.inputText} />
              </Col>
          </Form.Group>

          <Form.Group as={Row} className={"saveButton"}>
              <Col sm={{ span: 10, offset: 2 }}>
                  <Button onClick={this.onSave}>Save</Button>
              </Col>
          </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}

export default Configure;