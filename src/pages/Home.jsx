import React from "react";
import Navbar from "../components/Navbar";
import RightBar from "../components/RightBar";
// import Tweet from "../components/Tweet";
import Tweets from "../components/Tweets";
import Tweet from "../components/Tweet";

function Home() {
  return (
    <div>
      <body>
        <div className="container">
          <div className="row">
            <div className="col-1"></div>
            <Navbar />
            <div className="col-7 col-md-8 col-lg-6">
              <Tweet />
              <Tweets />
            </div>
            <div className="col-4 d-lg-block  d-none">
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
    </div>
  );
}

export default Home;
