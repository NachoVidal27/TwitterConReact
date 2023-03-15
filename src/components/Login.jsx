function Login({ setIsLogin }) {
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
                    <form method="post" action="/auth">
                      <div className="mb-2">
                        <label for="email" className="form-label"></label>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Email"
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
