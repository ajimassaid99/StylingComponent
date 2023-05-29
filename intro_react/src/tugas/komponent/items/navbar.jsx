import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { Component } from "react";
import "../css/Navbar.css";
import PropTypes from "prop-types";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { logo, menuItems } = this.props;
    const { isOpen } = this.state;

    return (
      <nav className="navbar">
        <div className="container">
          <a href="/" className="logo">
            {logo}
          </a>
          <div className="menu-toggle" onClick={this.toggleMenu}>
            <i className="fa fa-bars"></i>
          </div>
          <div className={`menu ${isOpen ? "open" : ""}`}>
            {menuItems.map((item, index) => (
              <a href="/" key={index}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
  menuItems: PropTypes.array.isRequired
};

Navbar.defaultProps = {
  logo: "Logo",
  menuItems: ["Home", "About", "Services", "Contact"]
};

export default Navbar;