import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUserTweets } from "../slices/userSlice";
import { like } from "../slices/tweetSlice";
import { BsFillHeartFill } from "react-icons/bs";
import toast from "react-hot-toast";

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
    <div>
      <div>
        <div>
          <div id="userData">
            <div className="portada"></div>
            <div
              id="profile-items-alignment"
              className="d-flex justify-content-between"
            >
              <img src={user.profileImg} id="imgOnUserProfile" alt="" />
              <div id="follow-button-alignmet">
                <button
                  type="submit"
                  className="text-light rounded-pill mb-3 mt-2 me-2"
                  id="follow-button"
                >
                  Follow
                </button>
              </div>
            </div>

            <h2>
              {user.firstname} {user.lastname}{" "}
            </h2>
            <h5>{user.username} </h5>
            <p></p>
            <div
              className="d-flex justify-content-end column-gap-3"
              id="follows"
            >
              <h5>
                <span className="fw-bold opacity-100"></span>
                <Link
                  to="/users/follow"
                  className="text-decoration-none text-dark"
                >
                  Following {user.following.length}
                </Link>
              </h5>
              <br />
              <h5>
                <span className="fw-bold opacity-100"></span>
                <Link
                  to="/users/follow"
                  className="text-decoration-none text-dark"
                >
                  Followers {user.followers.length}
                </Link>
              </h5>
            </div>
            <div>
              <h5 className=" mt-4" id="tweets-label">
                Tweets
              </h5>
            </div>
          </div>
          <div>
            {tweets.map((tweet) => (
              <div key={tweet._id}>
                <div>
                  <div>
                    <div class="d-flex border border-light p-2">
                      <div>
                        <img
                          src={user.profileImg}
                          class="profile-img"
                          alt="user profile pic"
                        />
                      </div>
                      <div class="ms-2">
                        <div class="name">
                          <h4>
                            {tweet.firstname} {tweet.lastname}
                          </h4>
                        </div>

                        <div class="username">
                          <h5>@{user.username}</h5>
                        </div>

                        <p id="content"> {tweet.content}</p>
                        <div class="d-flex justify-content-between">
                          <div key={tweet._id}>
                            <h5
                              onClick={(event) =>
                                onLikeTweet(event, user, tweet._id)
                              }
                              className={
                                tweet.likes.includes(user.id)
                                  ? "heartLiked"
                                  : "heart"
                              }
                            >
                              <BsFillHeartFill />
                            </h5>
                            <span className="heart ms-2">
                              {tweet.likes.length}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserData;
