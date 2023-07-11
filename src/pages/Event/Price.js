import React, { Component } from "react";
import {Container, Row, Col, Card, CardBody, Label, Input, Button, Form} from "reactstrap";
import { Link } from "react-router-dom";

import ticket2 from "../../assets/images/icon/ticket2.svg";
import FeatherIcon from "feather-icons-react";

class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricings: [
        {
          id: 2,
          title: "Paiement une fois",
          image: ticket2,
          price: "24",
          duration: "Full",
          desc:
            "Payer avec PayPal",
        }
      ],
      showForm: false
    };
    this.toggleForm = this.toggleForm.bind(this)
  }

  toggleForm()  {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  render() {
    return (
      <React.Fragment>
        <section className="section" id="tickets">
          <Container>
            {/* section title */}
            {/* <SectionTitle
              title="Our Tickets Rates"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect."
            /> */}

            <Row className="justify-content-center align-items-center">
              {this.state.pricings.map((pricing, key) => (
                <Col md="4" xs="12" key={key} className="mt-4 pt-2">
                  <Card
                    className="card pricing pricing-primary best-plan bg-light text-center border-0 rounded"
                  >
                    <CardBody className="py-5">
                      <img
                        src={pricing.image}
                        className="mb-4"
                        height="50"
                        alt=""
                      />
                      <h6 className="title text-uppercase fw-bold mb-4">
                        {pricing.title}
                      </h6>
                      <div className="d-flex justify-content-center mb-4">
                        <span className="price h1 mb-0">{pricing.price}</span>
                        <span className="h4 align-self-center mb-1">
                         € 
                        </span>
                      </div>

                      <p className="text-muted">{pricing.desc}</p>
                      <button
                        className="btn btn-primary btn-sm mt-4"
                        onClick={this.toggleForm}
                      >
                        Payer
                      </button>
                    </CardBody>
                  </Card>
                  {this.state.showForm &&
                    <Form className="mt-3">
                    <Row>
                      <Col md={12}>
                        <div className="mb-3">
                          <Label className="form-label">
                            Nom
                            <span className="text-danger">*</span>
                          </Label>
                          <div className="form-icon position-relative">
                            <FeatherIcon
                                icon="user"
                                className="fea icon-sm icons"
                            />
                            <Input
                                name="name"
                                id="name" type="text"
                                className="form-control ps-5"
                                placeholder="Entrez votre nom"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md={12}>
                        <div className="mb-3">
                          <Label className="form-label">
                            Email
                            <span className="text-danger">*</span>
                          </Label>
                          <div className="form-icon position-relative">
                            <FeatherIcon
                                icon="mail"
                                className="fea icon-sm icons"
                            />
                            <Input
                                name="email"
                                id="email"
                                type="email"
                                className="form-control ps-5"
                                placeholder="Entrez votre Email"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md={12}>
                        <div className="mb-3">
                          <Label className="form-label">
                            Pays
                            <span className="text-danger">*</span>
                          </Label>
                          <div className="form-icon position-relative">
                            <FeatherIcon
                                icon="country"
                                className="fea icon-sm icons"
                            />
                            <Input
                                name="country"
                                id="country"
                                type="text"
                                className="form-control ps-5"
                                placeholder="Entrez votre Pays"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md={12}>
                        <div className="mb-3">
                          <Label className="form-label">
                            Téléphone
                            <span className="text-danger">*</span>
                          </Label>
                          <div className="form-icon position-relative">
                            <FeatherIcon
                                icon="phone"
                                className="fea icon-sm icons"
                            />
                            <Input
                                name="phone"
                                id="phone"
                                type="number"
                                className="form-control ps-5"
                                placeholder="Entrez votre numéro"
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <Button type="submit" id="submit" name="send" className="btn" color="primary">Continuer</Button>
                      </Col>
                    </Row>
                  </Form>
                  }
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <div className="position-relative">
          <div className="shape overflow-hidden text-light">
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

export default Price;
