import React, { Component } from 'react';
import "../Styles/Navbar.css";
import { Icon } from '@iconify/react';


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  render() {
    ;
    return (
     
      <nav className="navbar">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown no-arrow">
          <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" onClick={this.toggleDropdown}
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="mr-2 d-none d-lg-inline account-user-name text-gray-600 small">marwa</span>
            <img className="img-profile rounded-circle" src="../assets/images/users/avatar-3.jpg" />
            
          </a>
        </li>
      </ul>
    </nav>
    );
  }
}

export default Navbar;
