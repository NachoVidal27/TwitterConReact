import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Tweets() {
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbmZvIjoiaG9sYSIsImlhdCI6MTY3ODgwMTYwN30.lnmRHmnsP8FGQwYaI8VNdsT7OH8PodlyrbWXX8xcYcs"
  );
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
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
          console.log(tweets);
          return (
            <div>
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
