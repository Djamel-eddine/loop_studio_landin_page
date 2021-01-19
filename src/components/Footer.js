import React from "react";

function Footer() {
  return (
    <footer>
      <div className="socialMedia">
        <img src="./images/logo.svg" alt="logo" />
        <div className="socialMediaIcons"></div>
      </div>
      <div className="navBar">
        <ul>
          <li>about</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>

        <small className="RightsReserved">
          &reg; 2021 Loopstudios. All rights reserved
        </small>
      </div>
    </footer>
  );
}

export default Footer;
