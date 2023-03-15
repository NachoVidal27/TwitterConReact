import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div
        id="navbar"
        class="d-flex flex-column justify-content-between position-fixed"
      >
        <div>
          <img src="/img/logopajarito.svg" class="logosHome" alt="" />
          <Link to="/tweets">
            <img src="/img/twtHome.svg" class="logosHome" alt="" />
          </Link>
          <Link to="/profile/">
            <img src="/img/twtUser.svg" clLinkss="logosHome" alt="" />
          </Link>
          <Link to="/tweets">
            <img src="/img/writeTwt.svg" class="logosHome" alt="" />
          </Link>
        </div>

        <Link to="/auth/logout">
          <img src="/img/logout.svg" class="logosHome" id="logout" alt="" />
        </Link>
      </div>
      ;
    </div>
  );
}

export default Navbar;
