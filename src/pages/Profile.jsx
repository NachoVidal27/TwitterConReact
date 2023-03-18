import React from "react";
import Navbar from "../components/Navbar";
import UserData from "../components/UserData";
import UserTweets from "../components/UserTweets";
import RightBar from "../components/RightBar";

function Profile() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-1">
            <Navbar />
          </div>
          <div className="col-7 col-md-8 col-lg-6">
            <UserData />
            {/* <UserTweets /> */}
          </div>
          <div className="col-4 d-lg-block  d-none">
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
