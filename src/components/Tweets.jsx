import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Tweets() {
  const token = useSelector((state) => state.user.token);
  console.log(token);
  const [tweets, setTweets] = useState();

  useEffect(() => {
    console.log("estamos ejecutando useEffect");
    const getTweets = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTA5MWUyZmQ1YTUzOGY3YWM3MTM2MCIsImlhdCI6MTY3ODk5MzM5M30.zhf74cr8VTDcWASET8x7HQLHw2f1JOKpFN2gEzcrVaw`,
        },
        method: "get",
        url: "http://localhost:8000/tweets",
      });
      setTweets(response.data);
      console.log("la response del axios es " + response);
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
