import React, { useState, useEffect } from "react";
import "./authStyle.css";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";

//Animation Library
import "animate.css";

//Loader for from react spinners
import { GridLoader } from "react-spinners";

import "./authStyle.css";
function Login() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2250);
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { logIn, googleSignIn } = useUserAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login Clicked!");

    try {
      await logIn(email, password);
      navigate("/home");
    } catch (e) {
      setError(e.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Loader">
      {loading ? (
        // Make a Component of the Loader Div .

        <div className="LoaderDiv">
          <div className="animated-loader">
            <GridLoader
              color="#93e0f7"
              loading={loading}
              speedMultiplier={1.3}
              size={50}
            />
          </div>
          <div className="typewriter">
            <h2>Yet Another Productivity App</h2>
          </div>
        </div>
      ) : (
        <div className="login-background">
          <div className="yapa-images animate__animated animate__pulse">
            <div className="side-images"></div>
          </div>
          <div className="Login-content">
            <div className="sign-up animate__animated animate__fadeInRight">
              Not a Member?{" "}
              <Link className="register-now" to="/signup">
                Register Now
              </Link>
            </div>
            <div className="yapa-logo animate__animated animate__fadeInDown"></div>
            <h2 className="login-text animate__animated animate__flipInX">
              Login to your Account
            </h2>
            <form
              className="Login-form animate__animated animate__fadeIn"
              onSubmit={handleLogin}
            >
              {/* email  */}
              <input
                className="email-input"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>

              {/* password  */}
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>

              <Link className="forgot-password-link">Forgot Password ?</Link>
              <button type="submit" className="btn">
                Sign In
              </button>
              <p className="other-login">or continue with</p>
              <div className="fa animate__animated animate__fadeInUp">
                <i
                  className="fa-brands fa-google fa-2x"
                  onClick={handleGoogleSignIn}
                ></i>
                {/* <i className="fa-brands fa-github fa-2x"></i>
                <i className="fa-brands fa-twitter fa-2x"></i>
                <i className="fa-brands fa-facebook fa-2x"></i> */}
              </div>
            </form>
            {/* <div className="Google-signin">
              <button onClick={handleGoogleSignIn}>Google Sign In</button>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}
export default Login;
