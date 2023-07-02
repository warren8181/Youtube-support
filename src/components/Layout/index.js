import React, { Component, Suspense } from "react";
import { withRouter } from "react-router-dom";
import BackToTop from "./backToTop";


// Layout Components
const Footer = React.lazy(() => import("./Footer"));
const FooterWithoutMenuLightSocialOnly = React.lazy(() =>
  import("./FooterWithoutMenuLightSocialOnly")
);


const Loader = () => {
  return (
    <div id="preloader">
      <div id="status">
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>
    </div>
  );
};

class Layout extends Component { 
  render() {
    return (
      <React.Fragment>
        <Suspense fallback={Loader()}>
          {this.props.children}
          {(() => {
            if (
              this.props.location.pathname === "/index-job"
            ) {
              return <Footer isLight={true} />;
            } else if (
              this.props.location.pathname === "/index-portfolio" ||
              this.props.location.pathname === "/index-logistics" ||
              this.props.location.pathname === "/index-marketing" ||
              this.props.location.pathname === "/index-services" ||
              this.props.location.pathname === "/index-modern-business" ||
              this.props.location.pathname === "/index-digital-agency" ||
              this.props.location.pathname === "/page-contact-two" ||
              this.props.location.pathname === "/index-crypto-two" ||
              this.props.location.pathname === "/index-freelancer" ||
              this.props.location.pathname === "/footer-layouts"
            ) {
              return (
                <>

                </>
              );
            } else if (
              this.props.location.pathname === "/index-personal" ||
              this.props.location.pathname === "/helpcenter-overview" ||
              this.props.location.pathname === '/helpcenter-guides' ||
              this.props.location.pathname === '/helpcenter-support-request' ||
              this.props.location.pathname === "/page-invoice"
            ) {
              return <FooterWithoutMenuLightSocialOnly className="" />;
            }
            else {
              return <Footer />;
            }
          })()}
          <BackToTop />
        </Suspense>

      </React.Fragment>
    );
  }
}

export default withRouter(Layout);
