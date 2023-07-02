// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";

//Import Images
import client1 from "../../assets/images/client/01.jpg";
import client2 from "../../assets/images/client/02.jpg";
import client3 from "../../assets/images/client/03.jpg";
import client4 from "../../assets/images/client/04.jpg";
import client5 from "../../assets/images/client/05.jpg";
import client6 from "../../assets/images/client/06.jpg";

//import images
import ticket1 from "../../assets/images/icon/ticket1.svg";
import ticket2 from "../../assets/images/icon/ticket2.svg";
import ticket3 from "../../assets/images/icon/ticket3.svg";

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
            "Lorem ipsum sit dolor amet consectetur adespicing elit.",
        }
      ]
    };
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
                      <Link
                        to="#"
                        className="btn btn-primary btn-sm mt-4"
                      >
                        Payer
                      </Link>
                    </CardBody>
                  </Card>
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
