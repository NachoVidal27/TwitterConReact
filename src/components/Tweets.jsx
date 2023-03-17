import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Tweets() {
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
                <div class="d-flex border border-light p-2">
                  <div>
                    <img
                      src={tweet.user.profileImg}
                      class="profile-img"
                      alt="user profile pic"
                    />
                  </div>
                  <div class="ms-2">
                    <div class="name">
                      <a
                        href="/user/<%= tweet.userId._id %>"
                        class="text-decoration-none text-dark"
                      >
                        {tweet.user.firstname} {tweet.user.lastname}
                      </a>
                    </div>

                    <div class="username">@{tweet.user.username}</div>

                    <div>
                      <p id="content">{tweet.content}</p>
                    </div>
                    <form action="/tweet/{tweet._id }/like" method="post">
                      <button type="submit" class="h_container">
                        <i id="heart" class="far fa-heart heart"></i>
                      </button>
                      <span class="heart">{tweet.likes.length}</span>
                    </form>
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
