import React from "react";
import { Link } from "react-router";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

class Layout extends React.Component {
  render() {
    
    const { location } = this.props;
    const containerStyle = {
      marginTop: "50px"
    };

    return (
      <div>
        <div class="container">
          <Nav location={location} />
        </div>

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>KillerNews.net</h1>

              {this.props.children}

            </div>
          </div>
        </div>

        <div class="container">
          <Footer/>
        </div>

      </div>

    );
  }
}

export default Layout;
