import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { like } from "../slices/tweetSlice";

function Tweets() {
  const dispatch = useDispatch();
  const [tweets, setTweets] = useState([]);
  const token = useSelector((state) => state.user.token);

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
    tweets.length && (
      <div>
        <div>
          {tweets.map((tweet) => {
            return (
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
                        onClick={() => dispatch(like(tweet.id))}
                        className={tweet.liked ? "heartLiked" : "heart"}
                      >
                        like
                      </h5>
                    </div>

                    <span className="heart">{tweet.likes.length}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        ;
      </div>
    )
  );
}

export default Tweets;
