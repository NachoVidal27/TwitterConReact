import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsFillHeartFill } from "react-icons/bs";
import { like, setTweets } from "../slices/tweetSlice";

function Tweets() {
  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.tweets);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    const getTweets = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        method: "get",
        url: "http://localhost:8000/tweets",
      });
      dispatch(setTweets(response.data));
    };
    getTweets();
  }, []);
  return (
    tweets.length &&
    tweets.map((tweet) => (
      <div key={tweet.id}>
        <div className="d-flex border border-light p-2">
          <div>
            <img
              src={tweet.user.profileImg}
              className="profile-img"
              alt="user profile pic"
            />
          </div>
          <div className="ms-2">
            <div className="name">
              {tweet.user.firstname} {tweet.user.lastname}
            </div>

            <div className="username">@{tweet.user.username}</div>

            <div>
              <p id="content">{tweet.content}</p>
            </div>
            <div key={tweet.id}>
              <h5
                onClick={() => dispatch(like({ user, tweetId: tweet.id }))}
                className={
                  tweet.likes.includes(user.id) ? "heartLiked" : "heart"
                }
              >
                <BsFillHeartFill />
              </h5>
            </div>

            <span className="heart">{tweet.likes.length}</span>
          </div>
        </div>
      </div>
    ))
  );
}

export default Tweets;
