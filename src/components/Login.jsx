import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../slices/userSlice";
import { useNavigate } from "react-router-dom";

function Login({ setIsLogin }) {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios({
      method: "post",
      url: "http://localhost:8000/users/tokens",
      data: {
        email: inputEmail,
        password: inputPassword,
      },
    });
    dispatch(login({ token: response.data.token }));

    navigate("/home");
  };
  return (
    <div>
      <body>
        <div id="bodyBackgroundColor">
          <div className="container">
            <div className="contenedor">
              <div
                className="row w-100 h-100 g-0"
                id="contenedor-general-login"
              >
                <div
                  className="col-lg-7 col-md-5 d-none d-md-block p-5"
                  id="parte-azul"
                >
                  <div className="position-relative h-100">
                    <p
                      className="text-light position-absolute bottom-0 start-0 fw-bold"
                      id="texto-azul"
                    >
                      Hey! Nice to see you again 🥰
                    </p>

                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1384/1384033.png"
                      className="position-absolute top-0 start-0"
                      alt=""
                      id="logo-twitter"
                    />
                  </div>
                </div>

                <div className="col-lg-5 col-md-7 col-sm-12 bg-light d-flex flex-column align-items-center justify-content-center">
                  <div className="" id="contenedor-login">
                    <h3 className="fw-bold">Login</h3>
                    <p>Ready to start using Twitter?</p>
                    <form onSubmit={handleSubmit} action="">
                      <div className="mb-2">
                        <label htmlFor="" className="form-label"></label>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Email"
                          value={inputEmail}
                          onChange={(event) =>
                            setInputEmail(event.target.value)
                          }
                        />
                      </div>

                      <div className="mb-2">
                        <label htmlFor="" className="form-label"></label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          placeholder="Password"
                          value={inputPassword}
                          onChange={(event) =>
                            setInputPassword(event.target.value)
                          }
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn text-light rounded-pill mt-2"
                        id="login-btn"
                      >
                        Login
                      </button>
                    </form>
                    <p className="d-flex justify-content-center mt-5">
                      Dont have an account?{" "}
                      <span
                        onClick={() => setIsLogin(false)}
                        className="text-primary ms-2"
                      >
                        Sign up
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Login;
