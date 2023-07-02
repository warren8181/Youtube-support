import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Input, Label } from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';

// import images
import americanEx from '../../assets/images/payments/american-ex.png';
import discover from '../../assets/images/payments/discover.png';
import masterCard from '../../assets/images/payments/master-card.png';
import paypal from '../../assets/images/payments/paypal.png';
import visa from '../../assets/images/payments/visa.png';

//Import Images
import logolight from '../../assets/images/logo-light.png';
import logodark from '../../assets/images/logo-dark.png';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid1: [
        { title: 'About us', link: '#' },
        { title: 'Services', link: '#' },
        { title: 'Team', link: '#' },
        { title: 'Pricing', link: '#' },
        { title: 'Project', link: '#' },
        { title: 'Careers', link: '#' },
        { title: 'Blog', link: '#' },
        { title: 'Login', link: '#' },
      ],
      grid2: [
        { title: 'Terms of Services', link: '#' },
        { title: 'Privacy Policy', link: '#' },
        { title: 'Documentation', link: '#' },
        { title: 'Changelog', link: '#' },
        { title: 'Components', link: '#' },
      ],
      paymentCardData: [
        {
          img: americanEx,
          title: 'American Express',
        },
        {
          img: discover,
          title: 'Discover',
        },
        {
          img: masterCard,
          title: 'Master Card',
        },
        {
          img: paypal,
          title: 'Paypal',
        },
        {
          img: visa,
          title: 'Visa',
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>       

        <footer className="footer">
          <div className="footer-py-30 footer-bar">
            <Container className="text-center">
              <Row className="align-items-center">
                <Col sm={6}>
                  <div className="text-sm-start">
                    <p className="mb-0">© {(new Date().getFullYear())} Connaître l'allemagne. Design with {" "}
                      <i className="mdi mdi-heart text-danger"></i> by {" "}
                      <Link
                        to="https://themesbrand.in/"
                        target="_blank"
                        className="text-reset"
                        rel="noopener noreferrer"
                      >
                        KapyGenius
                      </Link>.</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
