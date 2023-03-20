import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { add } from "../slices/tweetSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp({ setIsLogin }) {
  const navigate = useNavigate();
  const [inputNewUser, setinputNewUser] = useState();
  const[inputFirstName,setInputFirstName]=useState();
  const[inputLastName,setInputLastName]=useState();
  const[inputEmail,setInputEmail]=useState();
  const[inputUsername,setInputUsername]=useState();
  const[inputImage,setInputImage]=useState();
  const[inputPassword,setInputPassword]=useState();
  const dispatch = useDispatch();
  const handleRegister = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    
    const register = async () => {
      const response = await axios({
        method: "post",
        url: "http://localhost:8000/users",
        data: formData,
        headers: {
          "Content-Type": "multipart/from-data",
        },
      });
      if (response) {
        navigate("/login");
      }
    };
    register();
  };

  return (
    <div>
      <body>
        <div id="bodyBackgroundColor">
          <div className="container">
            <div className="contenedor">
              <div
                className="row w-100 h-100 g-0"
                id="contenedor-general-register"
              >
                <div
                  className="col-lg-7 col-md-5 d-none d-md-block  p-5"
                  id="parte-azul"
                >
                  <div className="position-relative h-100">
                    <p
                      className="text-light position-absolute bottom-0 start-0 fw-bold"
                      id="texto-azul"
                    >
                      Hi! Welcome to Twitter Clone 👋
                    </p>

                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1384/1384033.png"
                      className="position-absolute top-0 start-0"
                      alt=""
                      id="logo-twitter"
                    />
                  </div>
                </div>
                <div className="col-lg-5 col-md-7 col-sm-12 bg-light  d-flex flex-column align-items-center justify-content-center">
                  <div className="text-start" id="contenedor-register">
                    <h3 className="fw-bold">Sign Up</h3>
                    <p>Create and account and start using Twitter</p>
                    <form onSubmit={handleRegister} action="" method="post">
                      <div className="mb-2">
                        <label for="firstname" className="form-label"></label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstname"
                          name="firstname"
                          placeholder="First name"
                          value={inputFirstName}
                          onChange={(event) => {
                            setInputFirstName(event.target.value);
                          }}
                        />
                      </div>
                      <div className="mb-2">
                        <label for="lastname" className="form-label"></label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastname"
                          name="lastname"
                          placeholder="Last name"
                          value={inputLastName}
                          onChange={(event) => {
                            setInputLastName(event.target.value);
                          }}
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          for="exampleInputEmail1"
                          className="form-label"
                        ></label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          name="email"
                          placeholder="Email"
                          value={inputEmail}
                          onChange={(event) => {
                            setInputEmail(event.target.value);
                          }}
                        />
                      </div>
                      <div className="mb-2">
                        <label for="username" className="form-label"></label>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          name="username"
                          placeholder="Username"
                          value={inputUsername}
                          onChange={(event) => {
                            setInputUsername(event.target.value);
                          }}
                        />
                      </div>
                      <div className="mb-2">
                        <label for="image" className="form-label"></label>
                        <input
                          type="file"
                          className="form-control"
                          id="image"
                          name="image"
                          placeholder="image"
                          value={inputImage}
                          onChange={(event) => {
                            setInputImage(event.target.value);
                          }}
                        />
                      </div>
                      <div className="mb-2">
                        <label for="password" className="form-label"></label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          placeholder="Password"
                          value={inputPassword}
                          onChange={(event) => {
                            setInputPassword(event.target.value);
                          }}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn text-light rounded-pill mt-2"
                        id="login-btn"
                      >
                        Sign Up
                      </button>
                    </form>
                    <p className="text-center mt-5">
                      Alredy have account?{" "}
                      <span
                        onClick={() => setIsLogin(false)}
                        className="text-primary ms-2"
                      >
                        Login
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
            crossorigin="anonymous"
          ></script>
        </div>
      </body>
    </div>
  );
}

export default SignUp;
