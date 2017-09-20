import React from "react";
import Feature from "./Feature";

class Features extends React.Component {
  render() {

    const listFeatures = [
      {
        title: "Markup with HTML5",
        content: "90's authentic single-origin coffee stumptown Pinterest. Fap aesthetic dreamcatcher pickled Brooklyn irony.",
        img: "public/badge_html5.jpg",
        button: "More HTML 5",
        btn_class: "btn btn-warning btn-block"
      },
      {
        title: "Style with CSS3",
        content: "90's authentic single-origin coffee stumptown Pinterest. Fap aesthetic dreamcatcher pickled Brooklyn irony.",
        img: "public/badge_css3.jpg",
        button: "More CSS 3",
        btn_class: "btn btn-danger btn-block"
      },
      {
        title: "Framework by Bootstrap 3",
        content: "90's authentic single-origin coffee stumptown Pinterest. Fap aesthetic dreamcatcher pickled Brooklyn irony.",
        img: "public/badge_bootstrap.jpg",
        button: "More Bootstrap 3",
        btn_class: "btn btn-info btn-block"
      }
    ].map((feature, i) => <Feature key={i} title={feature.title} content={feature.content} imgLink={feature.img} btn_name={feature.button} btn_type={feature.btn_class}/> );

    return (
      <div class="row" id="featuresPart">
        <div class="row" id="featuresHeading">
          <div class="col-12">
            <h2>More Features</h2>
            <p class="lead">Cornhole kitsch Williamsburg pug bicycle rights vegan. Neutra food truck occupy kitsch sustainable.</p>
          </div>
        </div>

        <div class="row" id="listoffeatures">
          {listFeatures}
        </div>
      </div>
    );
  }
}

export default Features;
