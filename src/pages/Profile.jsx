import React from "react";
import Navbar from "../components/Navbar";
import UserData from "../components/UserData";
import UserTweets from "../components/UserTweets";
import RightBar from "../components/RightBar";

function Profile() {
  return (
    <div>
      <Navbar />
      {/* <UserData />
      <UserTweets />*/}
      <RightBar />
    </div>
  );
}

export default Profile;
