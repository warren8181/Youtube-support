import React from "react";
import {Link} from "react-router-dom";
import {Col, Container, Row} from "reactstrap";

// import { Parallax } from "react-parallax";
//CountDown
import Countdown from "react-countdown-now";

import bgImage from '../../assets/images/background/background-interview-illustration.png';

// Random component
const Completionist = () => <span>Le Direct est lancé !</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <React.Fragment>
        <div className="count-down">
          <span className="count-number">{days}</span>
          <span className="count-head position-relative d-block">Jours</span>
        </div>
        <div className="count-down">
          <span className="count-number">{hours}</span>
          <span className="count-head position-relative d-block">Heures</span>
        </div>{" "}
        <div className="count-down">
          <span className="count-number">{minutes}</span>
          <span className="count-head position-relative d-block">Minutes</span>
        </div>{" "}
        <div className="count-down">
          <span className="count-number">{seconds}</span>
          <span className="count-head position-relative d-block">Secondes</span>
        </div>
      </React.Fragment>
    );
  }
};

function Section({post}) {

  const uniquePost = post[0];

  const getDay = (endDate) => {
      const totalSeconds = Math.floor((endDate - new Date()) / 1000);
      return Math.floor(totalSeconds / (24 * 60 * 60))
  }

  return (
      <React.Fragment>
        <section className="bg-half-260 w-100 d-table"
                 style={{background : `url(${bgImage}) center center`}}
        >
          <div className="bg-overlay bg-primary bg-gradient" style={{opacity : '0.4'}}></div>
          <Container>
            <Row className="justify-content-center">
              <Col lg="10" className="text-center">
                <div className="title-heading">
                  <h4 className="text-success mb-3">{new Date(uniquePost?.datedudirect).toDateString() || 'Non Définie'}</h4>
                  <h1 className="display-4 title-dark text-white fw-bold mb-3">
                    Connaître l'Allemagne
                  </h1>
                  <p className="para-desc title-dark mx-auto text-white-50">
                    {uniquePost?.descriptiondudirect}
                  </p>

                  <Row>
                    <Col md="12" className="text-center">
                      <div id="eventdown">
                        <Countdown
                            date={uniquePost?.datedudirect}
                            renderer={renderer}
                        />
                      </div>
                    </Col>
                  </Row>

                  <div className="mt-3">
                    <Link to="#" className="btn btn-success mt-2 me-2">
                      Rejoins la formation
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* <div className="position-relative">
            <div className="shape overflow-hidden text-footer">
              <div className="text-center text-white-color p-4">
                <h5 className="text-dark mb-0">
                  Next Event : 15th March, 2023
                </h5>
              </div>
            </div>
          </div> */}
        {/* </Parallax> */}
      </React.Fragment>
  );
}

export default Section;
