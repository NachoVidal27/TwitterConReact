import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Tweets() {
  const token = useState((state) => state.user.token);
  console.log(token);
  const [tweets, setTweets] = useState();
  useEffect(() => {
    console.log("milanesa");
    const getTweets = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "get",
        url: "http://localhost:8000/tweets",
      });
      setTweets(response.data);
    };
    getTweets();
  }, []);
  return (
    <div>
      <div>
        {tweets.map((tweet) => {
          return (
            <div key={tweet.id}>
              <h5>{tweet.content}</h5>
            </div>
          );
        })}
      </div>
      ;
    </div>
  );
}

export default Tweets;
