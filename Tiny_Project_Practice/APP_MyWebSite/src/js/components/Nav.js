import React from "react";
import { IndexLink, Link } from "react-router";

class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      isCollapsed: true,
    };
  }

  toggleCollapse() {
    const CollapseState = !this.state.isCollapsed;
    this.setState({isCollapsed: CollapseState});
  }

  render() {
    const { location } = this.props;
    const { isCollapsed } = this.state;

    const homeClass = location.pathname === "/" ? "active" : "";
    const servicesClass = location.pathname.match(/^\/services/) ? "active" : "";
    const navClass = isCollapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-fixed-top">
        <div class="container">

          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>

          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class={homeClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
              </li>
              <li class={servicesClass}>
                <Link to="setting" onClick={this.toggleCollapse.bind(this)}>settings</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
