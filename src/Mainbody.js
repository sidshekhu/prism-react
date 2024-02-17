
import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function CustomBody() {
    return (
        <div style={{ padding: '10px', background: "#eef6ff" }}>
            <Row>
                <Col xs={7}>
                    <h1 style={{ color: "#123775", padding: '50px 40px 50px ', }}>Certificate <span className='divBold'>Attestation Services</span> in UAE</h1>
                    <div style={{ padding: '0 40px' }}>
                        <h3>Fast, Secure & Affordable Attestation Services in Dubai, Sharjah, Abu Dhabi</h3>
                        <div>MOFA Attestation | Degree, Birth, Marriage Certificate</div>
                        <div>Attestation for UAE | Apostille Services | Commercial Documents Attestation</div>
                        <h5 style={{ marginTop: "18px" }}>Think Attestation, Think Prompt</h5>
                    </div>
                </Col>
                <Col xs={1}>
                </Col>
                <Col xs={4}>
                    <Form>
                        <Form.Group className="mb-1" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="formBasicPassword">
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control type="number" placeholder="Mobile" />
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="formBasicEmail">
                            <Form.Label>Message</Form.Label>
                            <Form.Control type="text" placeholder="Message" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}
export default CustomBody