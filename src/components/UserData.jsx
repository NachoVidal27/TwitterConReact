import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUserTweets } from "../slices/userSlice";

function UserData() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user);
  const tweets = useSelector((state) => state.tweets);

  console.log("no se ejecuto el useEffect en user tweets");
  useEffect(() => {
    if (token) {
      console.log("se ejecuto useEffect en user data");
      const getData = async () => {
        const response = await axios({
          headers: {
            Authorization: `Bearer ${token}`,
          },
          method: "get",
          url: `http://localhost:8000/users/show/${user.id}`,
        });
        dispatch(setUserTweets(response.data));
        console.log(response.data, "esto es data de userdata");
        console.log(user, "este de user");
      };
      getData();
    }
  }, [token]);

  return (
    tweets && tweets.map((tweet) => (
      <div key={tweet._id}>
        {console.log(tweet)}
        <h2>{tweet.content}</h2>
      </div>
    ))
  )
}

export default UserData;
