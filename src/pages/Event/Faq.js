// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody, UncontrolledCollapse } from "reactstrap";
import SectionTitle from "../../components/Shared/SectionTitle";


class Faq extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light">
                    <Container>
                        <SectionTitle
                            title="Questions Fréquemment Posées"
                            desc=""
                        />
                        <Card className="rounded shadow border-0 bg-primary overflow-hidden">
                            <Row className="g-0 justify-content-center align-items-center">
                                <Col lg="9">
                                    <CardBody className="section-title p-md-5">
                                        <div className="accordion" id="buyingquestion">
                                            <div className="accordion-item rounded mt-2">
                                                <h2 className="accordion-header">
                                                    <button id="headingTwo" className="accordion-button border-0 bg-light collapsed"
                                                        type="button">
                                                        Offrez-vous un accompagnement ? Est-ce payant ?
                                                    </button>
                                                </h2>
                                                <UncontrolledCollapse toggler="#headingTwo" className="border-0"
                                                >
                                                    <div className="accordion-body text-muted">
                                                        Réponse
                                                    </div>
                                                </UncontrolledCollapse>
                                            </div>

                                            <div className="accordion-item rounded mt-2">
                                                <h2 className="accordion-header" >
                                                    <button id="headingThree" className="accordion-button border-0 bg-light collapsed"
                                                        type="button" >
                                                        Peut-on payer la formation en plusieurs tranches ?
                                                    </button>
                                                </h2>
                                                <UncontrolledCollapse toggler="#headingThree" className="border-0"
                                                >
                                                    <div className="accordion-body text-muted">
                                                        Réponse
                                                    </div>
                                                </UncontrolledCollapse>
                                            </div>

                                            <div className="accordion-item rounded mt-2">
                                                <h2 className="accordion-header" >
                                                    <button id="headingFour" className="accordion-button border-0 bg-light collapsed"
                                                        type="button" >
                                                        Peut-on payer carte de crédit ?
                                                    </button>
                                                </h2>
                                                <UncontrolledCollapse toggler="#headingFour" className="border-0"
                                                >
                                                    <div className="accordion-body text-muted">
                                                        Réponse
                                                    </div>
                                                </UncontrolledCollapse>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Col>
                            </Row>
                        </Card>
                    </Container>
                </section>
                <div className="position-relative">
                    <div className="shape overflow-hidden text-white">
                        <svg
                            viewBox="0 0 2880 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Faq;
