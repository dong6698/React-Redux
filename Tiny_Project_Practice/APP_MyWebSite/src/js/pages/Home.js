import React from "react";
import Features from "../components/Features";
import Carousels from "../components/Carousels";

class Home extends React.Component {
  render() {
    return (
      <div>

        <div class="row" id="features">
          <div class="col-lg-12">
            <Features />
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
