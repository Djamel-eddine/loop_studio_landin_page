import React from "react";

function NavBar() {
  return (
    <div>
      <nav>
        <img src="./images/logo.svg" alt="logo" />
        <ul>
          <li>about</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
      </nav>
      <div className="mainParagraph">Impressive Experiences that deliver</div>
    </div>
  );
}

export default NavBar;
