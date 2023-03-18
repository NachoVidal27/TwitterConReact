import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      id="navbar"
      className="d-flex flex-column justify-content-between position-fixed"
    >
      <div>
        <img src="/img/logopajarito.svg" className="logosHome" alt="" />
        <Link to="/home">
          <img src="/img/twtHome.svg" className="logosHome" alt="" />
        </Link>
        <Link to="/profile/">
          <img
            src="/img/twtUser.svg"
            id="userPicture"
            clLinkss="logosHome"
            alt=""
          />
        </Link>
        <Link to="/home">
          <img src="/img/writeTwt.svg" className="logosHome" alt="" />
        </Link>
      </div>

      <Link to="/auth/logout">
        <img src="/img/logout.svg" className="logosHome" id="logout" alt="" />
      </Link>
    </div>
  );
}

export default Navbar;
