
import React from 'react';
import { Col, Row, Button, Card, CardHeader, CardBody, Image } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { flagDetails } from './JsonData/flagFile';
import Emabssy from './assets/ICON/Embassy.svg'
import Mofa from './assets/ICON/Mofa.svg'
import Apostille from './assets/ICON/Apostille.svg'
import PCC from './assets/ICON/PCC.svg'
import Certificate from './assets/ICON/attestation.svg'
import DegreeCertificate from './assets/ICON/Degree.svg'
import BirthCertificate from './assets/ICON/Birth-Certificate.svg'
import MarriageCertificate from './assets/ICON/Marriage Certificate.svg'
import ISOCertified from './assets/ICON/ISO-Certified.svg'
import Excellent from './assets/ICON/Excellent-Service.svg';
import FPAD from './assets/ICON/FPAD.svg';
import Secure from './assets/ICON/Secure.svg';
import CBase from './assets/ICON/Client-base.svg';
import CS from './assets/ICON/247CS.svg';
function CustomBody() {
    return (
        <div style={{ textAlign: 'center', }}>
            <Row style={{ background: "#eef6ff", padding: "30px 0px 120px" }}>
                <Col xs={12} sm={6}>
                    <h1 style={{ color: "#123775", padding: '30px 10px 20px 70px', }}>Certificate <span className='divBold'>Attestation Services</span> in UAE</h1>
                    <div style={{ padding: '0px 0px 0px 70px' }}>
                        <h3>Fast, Secure & Affordable Attestation Services in Dubai, Sharjah, Abu Dhabi</h3>
                        <div>MOFA Attestation | Degree, Birth, Marriage Certificate</div>
                        <div>Attestation for UAE | Apostille Services | Commercial Documents Attestation</div>
                        <h5 style={{ marginTop: "18px" }}>Think Attestation, Think Prompt</h5>
                    </div>
                </Col>
                <Col xs={12} sm={1}>
                </Col>
                <Col xs={12} sm={4}>
                    <Card>
                        <CardHeader style={{ textAlign: "center" }}>
                            <h3 style={{ color: "#123775" }}>Get a Quote</h3>
                            <div style={{ color: "#b1adad" }}>Our Advisor will contact you shortly</div>
                        </CardHeader>
                        <CardBody>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="number" placeholder="Mobile" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control as="textarea" placeholder="Message" rows="3" />
                                </Form.Group>
                                <Button variant="primary" type="submit" size='lg' style={{ width: '100%' }}>
                                    Get Free Quote
                                </Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <div style={{ padding: "100px 0px 50px" }}>
                <h3 style={{ color: "#123775" }}>We are Experts in <span className='divBold'>all types of Attestation Services</span></h3>
                <p style={{ marginBottom: '50px' }}>Offices is in Asia, Middle East and Europe</p>
                <Row>
                    {flagDetails.map((data) =>
                        <Col xs={{ span: 3, offset: 1 }} style={{ background: "#FFF", boxShadow: '0 0 10px 0.5px rgb(2 41 106 / 11%)', marginBottom: '40px' }}>
                            <Image width={80} height={50} src={data.imagePath} />{data.name}
                        </Col>
                    )}
                    <Col xs={{ span: 3, offset: 1 }} className='divBold'>{'120+ Countries ->'}</Col>
                </Row>
            </div>
            <div style={{ padding: "30px 120px 60px" }}>
                <h2>Best Attestation Services in UAE</h2>
                <Row>
                    <Col xs={{ span: 12 }} sm={{ span: 2, offset: 1 }} style={{ background: "#FFF", boxShadow: '0 2px 4px rgba(0, 0, 0, .15)', margin: '40px', height: '190px', borderRadius: '20px' }}>
                        <Image width={100} height={100} src={Emabssy} className='iconImagePadding' />
                        <h6>UAE Embassy Attestation</h6>
                    </Col>
                    <Col xs={{ span: 12 }} sm={{ span: 2, offset: 1 }} style={{ background: "#FFF", boxShadow: '0 2px 4px rgba(0, 0, 0, .15)', margin: '40px', height: '190px', borderRadius: '20px' }}>
                        <Image width={100} height={100} src={Mofa} className='iconImagePadding' />
                        <h6>MOFA Attestation</h6>
                    </Col>
                    <Col xs={{ span: 12 }} sm={{ span: 2, offset: 1 }} style={{ background: "#FFF", boxShadow: '0 2px 4px rgba(0, 0, 0, .15)', margin: '40px', height: '190px', borderRadius: '20px' }}>
                        <Image width={100} height={100} src={Apostille} className='iconImagePadding' />
                        <h6>Appostile Services</h6>
                    </Col>
                    <Col xs={{ span: 12 }} sm={{ span: 2, offset: 1 }} style={{ background: "#FFF", boxShadow: '0 2px 4px rgba(0, 0, 0, .15)', margin: '40px', height: '190px', borderRadius: '20px' }}>
                        <Image width={100} height={100} src={PCC} className='iconImagePadding' />
                        <h6>Police Clearance Certificate</h6>
                    </Col>
                    <Col xs={{ span: 12 }} sm={{ span: 2, offset: 1 }} style={{ background: "#FFF", boxShadow: '0 2px 4px rgba(0, 0, 0, .15)', margin: '40px', height: '190px', borderRadius: '20px' }}>
                        <Image width={100} height={100} src={Certificate} className='iconImagePadding' />
                        <h6>Certificate Attestation</h6>
                    </Col>
                    <Col xs={{ span: 12 }} sm={{ span: 2, offset: 1 }} style={{ background: "#FFF", boxShadow: '0 2px 4px rgba(0, 0, 0, .15)', margin: '40px', height: '190px', borderRadius: '20px' }}>
                        <Image width={100} height={100} src={DegreeCertificate} className='iconImagePadding' />
                        <h6>Degree Certificate Attestation</h6>
                    </Col>
                    <Col xs={{ span: 12 }} sm={{ span: 2, offset: 1 }} style={{ background: "#FFF", boxShadow: '0 2px 4px rgba(0, 0, 0, .15)', margin: '40px', height: '190px', borderRadius: '20px' }}>
                        <Image width={100} height={100} src={BirthCertificate} className='iconImagePadding' />
                        <h6>Birth Certificate Attestation</h6>
                    </Col>
                    <Col xs={{ span: 12 }} sm={{ span: 2, offset: 1 }} style={{ background: "#FFF", boxShadow: '0 2px 4px rgba(0, 0, 0, .15)', margin: '40px', height: '190px', borderRadius: '20px' }}>
                        <Image width={100} height={100} src={MarriageCertificate} className='iconImagePadding' />
                        <h6>Marriage Certificate Attestation</h6>
                    </Col>
                </Row>
            </div>
            <div style={{ background: "#eef6ff", padding: "100px 100px" }}>
                <h1 style={{ transform: 'scale3d(1.25, 1.5, 0.5)' }}>Why <span className='divBold'>Prism?</span></h1>

                <Row style={{ marginTop: '20px', background: '#FFF', border: '2px dashed #6c757d' }}>
                    <Col xs={1} >
                        <Image width={60} height={60} src={ISOCertified} />
                        <p className='boldParagraph'>ISO 9001:2015 Certified</p>
                    </Col>
                    <Col xs={{ span: 1, offset: 1 }} >
                        <Image width={60} height={60} src={Excellent} />
                        <p className='boldParagraph'>Excellent Service</p>
                    </Col>
                    <Col xs={{ span: 1, offset: 1 }} >
                        <Image width={60} height={60} src={FPAD} />
                        <p className='boldParagraph'>Free Pickup & Delivery</p>
                    </Col>
                    <Col xs={{ span: 1, offset: 1 }} >
                        <Image width={60} height={60} src={Secure} />
                        <p className='boldParagraph'>Secure And Confidential</p>
                    </Col>
                    <Col xs={{ span: 1, offset: 1 }} >
                        <Image width={60} height={60} src={CBase} />
                        <p className='boldParagraph'>Loyal Client Base</p>
                    </Col>
                    <Col xs={{ span: 1, offset: 1 }} >
                        <Image width={60} height={60} src={CS} />
                        <p className='boldParagraph'>UAE Embassy Attestation</p>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export default CustomBody