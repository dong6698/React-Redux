import React from "react";

import Article from "../components/Article";

class Featured extends React.Component {
  render() {
    const Articles = [
      "Featured Artile 1",
      "Featured Artile 2",
      "Featured Artile 3",
    ].map((title, i) => <Article key={i} title={title} content="Another Featured text"/> );

    const adText = [
      "Ad spot #1",
      "Ad spot #2",
      "Ad spot #3",
      "Ad spot #4",
      "Ad spot #5",
      "Ad spot #6"
    ];

    const randomAd = adText[Math.round( Math.random() * (adText.length-1) )];

    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <div class="well text-center">
              This is a Random {randomAd}
            </div>
          </div>
        </div>

        <div class="row">{Articles}</div>
      </div>
    );
  }
}

export default Featured;
