import React from "react";
import Navbar from "../components/Navbar";
import RightBar from "../components/RightBar";
// import Tweet from "../components/Tweet";
import Tweets from "../components/Tweets";

function Home() {
  return (
    <div>
      <body>
        <div className="container">
          <div className="row">
            <div className="col-1 col-md-1 col-sm-1"></div>
            <Navbar />
            <div className="col-7 col-md-8 col-lg-6">
              <div>
                <Tweets />
                <div className="d-flex border border-light p-2">
                  <div>
                    <img
                      src="<%= tweet.userId.profileImg%>"
                      className="profile-img"
                      alt="user profile pic"
                    />
                  </div>
                  <div className="ms-2">
                    <div className="name">
                      {/* <a
                        href="/user/<%= tweet.userId._id %>"
                        className="text-decoration-none text-dark"
                      ></a> */}
                    </div>

                    <div className="username"></div>

                    <div>
                      <p id="content"></p>
                    </div>
                    <form action="/tweet/<%= tweet._id %>/like" method="post">
                      <button type="submit" className="h_container">
                        <i id="heart" className="far fa-heart heart"></i>
                      </button>
                      <span className="heart"></span>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 d-none d-lg-block">
              <RightBar />
            </div>
          </div>
        </div>
        <script
          src="https://kit.fontawesome.com/3929e16ef5.js"
          crossorigin="anonymous"
        ></script>
        <script src="{% static 'network/functions.js' %}"></script>
      </body>
      ;
    </div>
  );
}

export default Home;
