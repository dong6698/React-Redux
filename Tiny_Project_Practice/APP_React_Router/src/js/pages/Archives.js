import React from "react";

import Article from "../components/Article";

class Archives extends React.Component {
  render() {
    const { query } = this.props.location;
    const { params } = this.props;
    const { articleID } = params;
    const { date, filter } = query;

    const Content = "This is a common text for test component of Archive";

    const Articles = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Fake Article",
      "Partial Article",
      "American Article",
      "Mexican Article",
    ].map((title, i) => <Article key={i} title={title} content={Content}/> );

    return (
      <div>
        <h1>Archives</h1>
        article: {articleID}, date: {date}, filter: {filter}
        <div class="row">{Articles}</div>
      </div>
    );
  }
}

export default Archives;

// this.props.location.query.{?date or filter}
// this.props.params.{(/:id)}

// localhost:8080/#/archives/2?date=asdf&filter=all
