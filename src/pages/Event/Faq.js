import React from "react";
import { Container, Row, Col, Card, CardBody, UncontrolledCollapse } from "reactstrap";
import SectionTitle from "../../components/Shared/SectionTitle";

function Faq({faqs})  {
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
                                        {faqs.length > 0 ? faqs.map((faq) => (
                                            <div className="accordion-item rounded mt-2" key={faq.id}>
                                                <h2 className="accordion-header">
                                                    <button id={`heading${faq.id}`} className="accordion-button border-0 bg-light collapsed"
                                                            type="button">
                                                        {faq.question}
                                                    </button>
                                                </h2>
                                                <UncontrolledCollapse toggler={`#heading${faq.id}`} className="border-0"
                                                >
                                                    <div className="accordion-body text-muted">
                                                        {faq.reponse}
                                                    </div>
                                                </UncontrolledCollapse>
                                            </div>
                                        )) : <p className='text-center text-light'>Aucune question n'a été trouvée</p>}
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

export default Faq;
