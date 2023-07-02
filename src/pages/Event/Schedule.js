// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Card,
  CardBody,
} from "reactstrap";
import classnames from "classnames";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reasons: [
        {
          id: 1,
          title: "Digital Conference Event Intro",
          address: "Hall 3, Sinchang-dong, Kwangju,",
          country: "South Korea",
          time: "10:30AM to 11:15AM",
          day: "11",
          month: "OCT",
        },
        {
          id: 2,
          title: "Conference On User Interface",
          address: "Hall 3, Sinchang-dong, Kwangju,",
          country: "South Korea",
          time: "11:15AM to 12:30PM",
          day: "11",
          month: "OCT",
        },
        {
          id: 3,
          title: "Business World Event Intro",
          address: "Hall 3, Sinchang-dong, Kwangju,",
          country: "South Korea",
          time: "12:30PM to 01:00PM",
          day: "11",
          month: "OCT",
        },
        {
          id: 4,
          title: "Business Conference for professional",
          address: "Hall 3, Sinchang-dong, Kwangju,",
          country: "South Korea",
          time: "01:00PM to 02:15PM",
          day: "11",
          month: "OCT",
        },
      ]
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    this.setState({ activeTab: tab });
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Ma formation YouTube t'apprendra"
              desc=""
            />

            <Row>
              <Col className="col-12">
                <div className="tab-content" id="pills-tabContent">
                  <Row>
                    {this.state.reasons.map((reason, key) => (
                      <Col lg={6} key={key} className="mt-4 pt-2">
                        <Card className="event-schedule event-primary rounded border">
                          <CardBody>
                            <div className="d-flex align-items-center">
                              <ul className="date text-center me-3 mb-0 list-unstyled">
                                <li className="day fw-bold mb-2">
                                  {reason.id}
                                </li>
                              </ul>
                              <div className="flex-1 content">
                                <h4 className="text-dark title">
                                  {reason.title}
                                </h4>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Schedule;
