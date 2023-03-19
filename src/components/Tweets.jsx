import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsFillHeartFill } from "react-icons/bs";
import { like, setTweets } from "../slices/tweetSlice";
import toast from "react-hot-toast";

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

  const onLikeTweet = async (event, user, tweetId) => {
    try {
      // await PEGARLE_A_LA_API
      const response = await axios({
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        method: "post",
        url: `http://localhost:8000/tweets/${tweetId}`,
      });
      // PEGARLE_A_LA_API end
      dispatch(like({ tweetId, user }));
    } catch (error) {
      console.log(error);
      toast.error("Error likeando tweets");
    }
    return true;
  };

  return (
    user &&
    tweets.map((tweet) => (
      <div key={tweet._id}>
        <div className="d-flex border border-light p-2">
          <div>
            <img src={tweet.user.profileImg} className="profile-img" alt="user profile pic" />
          </div>
          <div className="ms-2">
            <div className="name">
              {tweet.user.firstname} {tweet.user.lastname}
            </div>

            <div className="username">@{tweet.user.username}</div>

            <div>
              <p id="content">{tweet.content}</p>
            </div>
            <div key={tweet._id}>
              <h5 onClick={(event) => onLikeTweet(event, user, tweet._id)} className={tweet.likes.includes(user.id) ? "heartLiked" : "heart"}>
                <BsFillHeartFill />
              </h5>
              <span className="heart ms-2">{tweet.likes.length}</span>
            </div>
          </div>
        </div>
      </div>
    ))
  );
}

export default Tweets;
