import React from "react";

class Feature extends React.Component {
  render() {
    const { title } = this.props;
    const { content } = this.props;
    const { imgLink } = this.props;
    const { btn_name } = this.props;
    const { btn_type } = this.props;

    return (
      <div class="col-sm-4 feature">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">{ title }</h3>
          </div>
          <div class="panel-body center-block">
            <img src={ imgLink } class="img-circle center-block"></img>
            { content }
          </div>
          <div class="panel-footer"><a href="#" class={ btn_type }>{ btn_name }</a></div>
        </div>
      </div>
    );
  }
}

export default Feature;
