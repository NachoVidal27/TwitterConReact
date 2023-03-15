import React from "react";

function UserData() {
  return (
    <div>
      <div class="col-10 col-md-10 col-lg-6 offset-2">
        <div class="portada"></div>
        <div
          id="profile-items-alignment"
          class="d-flex justify-content-between"
        >
          <img src=" <%= user.profileImg %>" id="imgOnUserProfile" alt="" />
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
      <h2></h2>
      <h5></h5>
      <p></p>
      <div class="d-flex justify-content-end column-gap-3">
        <h5>
          <span class="fw-bold opacity-100"></span>
          <a
            href="/user/<%= user._id %>/following"
            class="text-decoration-none text-dark"
          >
            Following
          </a>
        </h5>
        <br />
        <h5>
          <span class="fw-bold opacity-100"></span>
          <a
            href="/user/<%= user._id %>/followers"
            class="text-decoration-none text-dark"
          >
            Followers
          </a>
        </h5>
      </div>
      <div>
        <h5 class="ms-2 mt-4" id="tweets-label">
          Tweets
        </h5>
      </div>
    </div>
  );
}

export default UserData;
