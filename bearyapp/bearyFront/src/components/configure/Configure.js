import React from 'react';
import { Link } from "react-router-dom";
import '../../styles/Configure.css';
import BodyBackgroundColor from "react-body-backgroundcolor";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Configure() {
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

    <Form>
        <Form.Group as={Form.Row} className={"Headings"}>
            <Form.Label column sm={2}>
                <h4>CONFIGURE</h4>
            </Form.Label>
        </Form.Group>
        <Form.Group as={Form.Row} className={"SubHeadings"}>
            <Form.Label column sm={2}>
                NAME:
            </Form.Label>
            <Col sm={10}>
                <Form.Control type="text" placeholder="First Name" />
            </Col>
        </Form.Group>
        <Form.Group as={Form.Row} className={"Headings"}>
            <Form.Label column sm={2}>
                <h5>EMOTION</h5>
            </Form.Label>
                <Form.Label column sm={2}>
                    <h5>RESPONSE</h5>
                </Form.Label>
        </Form.Group>
        <Form.Group as={Form.Row} className={"SubHeadings"}>
            <Form.Label column sm={2}>
                HAPPY:
            </Form.Label>
            <Col sm={10}>
                <Form.Control type="text" placeholder="Lets sing a song!" />
            </Col>
        </Form.Group>
        <Form.Group as={Form.Row} className={"SubHeadings"}>
            <Form.Label column sm={2}>
                SAD:
            </Form.Label>
            <Col sm={10}>
                <Form.Control type="text" placeholder="Want to hear a joke?" />
            </Col>
        </Form.Group>

        <Form.Group as={Form.Row} className={"SubHeadings"}>
            <Form.Label column sm={2}>
                ANGRY:
            </Form.Label>
            <Col sm={10}>
                <Form.Control type="text" placeholder="Lets play a game!" />
            </Col>
        </Form.Group>

        <Form.Group as={Row} className={"saveButton"}>
            <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Save</Button>
            </Col>
        </Form.Group>
        </Form>



    </div>
  );
}

export default Configure;