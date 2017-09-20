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

    const featuredClass = location.pathname === "/" ? "active" : "";
    const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
    const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const navClass = isCollapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
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
              <li class={featuredClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Featured</IndexLink>
              </li>
              <li class={archivesClass}>
                <Link to="archives" onClick={this.toggleCollapse.bind(this)}>Archives</Link>
              </li>
              <li class={settingsClass}>
                <Link to="settings" onClick={this.toggleCollapse.bind(this)}>Settings</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;


// Bootstrap navbar need to review
