import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";


function UserTweets() {
  const [data, setData] = useState([]);
  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user);
  console.log("ejecutando usertweets");
  useEffect(() => {
    console.log("ejecutando useeffect");
    const getData = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "get",
         url: `http://localhost:8000/users/${user.id}`,
      });
      setData(response.data);
      console.log(response.data);
    };
    getData();
  }, []);
  return (
    <div>
      <div>
        <div class="d-flex border border-light p-2">
          <div>
            <img src="<%= user.profileImg%>" class="profile-img" alt="user profile pic" />
          </div>
          <div class="ms-2">
            <div class="name">
             {/*  {user.firstname} {user.lastname} */}
            </div>

            <div class="username">
           {/*    @{user.username} {tweet.createdAt} */}
            </div>

            {/* <p id="content"> {tweet.content}</p> */}
            <div class="d-flex justify-content-between">
              <form action="/user/<%= user._id %>/<%= tweet._id %>/like" method="post">
                <button type="submit" class="h_container">
                  <i id="heart" class="far fa-heart heart"></i>
                </button>
                {/* <span class="heart">{tweet.likes.length} </span> */}
              </form>
              {/* <% if (logedUser.username === user.username) {%> */}
              {/* <form action="/tweet/<%= tweet._id %>?_method=DELETE" method="post"> */}
                <button type="submit" class="h_container">
                  <i class="fa fa-trash-o heart"></i>
                </button>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserTweets;
