import React from "react";

class Article extends React.Component {
  render() {
    const { title } = this.props;
    const { content } = this.props;

    return (
      <div class="col-md-4">
        <h4>{ title }</h4>
        <p>{ content }</p>
        <a class="btn btn-default" href="#">More Info</a>
      </div>
    );
  }
}

export default Article;
