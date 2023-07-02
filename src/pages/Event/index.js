// React Basic and Bootstrap
import React, { Component } from "react";

// Import Generic components
import Section from "./section";
import About from "./About";
import Speakers from "./Speakers";
import Cta from "./Cta";
import Price from "./Price";
import Faq from "./Faq";
import Schedule from "./Schedule";


class Index extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Hero Start */}
        <Section />

        {/* About */}
        <About />

        <Schedule />

        {/* FAQ */}
        <Faq />

        {/* Price */}
        <Price />

      </React.Fragment>
    );
  }
}

export default Index;
