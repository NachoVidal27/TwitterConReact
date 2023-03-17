import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function UserData() {
  const [data, setData] = useState([]);
  const token = useSelector((state) => state.user.token);
  useEffect(() => {
    const getData = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "get",
        url: `http://localhost:8000/users/641091e2fd5a538f7ac71360`,
      });
      setData(response.data);
      console.log(response.data);
    };
    getData();
  }, []);
  return (
    data.length && (
      <div>
        {data.map((user) => {
          return (
            <div key={user.id}>
              <div>
                <div class="col-10 col-md-10 col-lg-6 offset-2">
                  <div class="portada"></div>
                  <div
                    id="profile-items-alignment"
                    class="d-flex justify-content-between"
                  >
                    <img src={user.profileImg} id="imgOnUserProfile" alt="" />
                    <div id="follow-button-alignmet">
                      <form action="<%= user._id %>/follow" method="post">
                        <button
                          type="submit"
                          class="rounded-pill mb-3 mt-2 me-2"
                          id="unfollow-btn"
                        >
                          Unfollow
                        </button>
                      </form>

                      <form action="<%= user._id %>/follow" method="post">
                        <button
                          type="submit"
                          class="text-light rounded-pill mb-3 mt-2 me-2"
                          id="follow-button"
                        >
                          Follow
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                <h2>
                  {user.firstname} {user.lastname}{" "}
                </h2>
                <h5>{user.username} </h5>
                <p>{user} </p>
                <div class="d-flex justify-content-end column-gap-3">
                  <h5>
                    <span class="fw-bold opacity-100"></span>
                    <Link
                      to="/users/follow"
                      class="text-decoration-none text-dark"
                    >
                      Following
                    </Link>
                  </h5>
                  <br />
                  <h5>
                    <span class="fw-bold opacity-100"></span>
                    <Link
                      to="/users/follow"
                      class="text-decoration-none text-dark"
                    >
                      Followers
                    </Link>
                  </h5>
                </div>
                <div>
                  <h5 class="ms-2 mt-4" id="tweets-label">
                    Tweets
                  </h5>
                </div>
              </div>
            </div>
          );
        })}{" "}
      </div>
    )
  );
}

export default UserData;
