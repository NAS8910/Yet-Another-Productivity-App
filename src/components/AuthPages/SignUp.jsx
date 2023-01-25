import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";

import "./authStyle.css";

import { UseUserAuth } from "../../context/UserAuthContext";
import { createUserDocument } from "../../firebase";

function SignUp() {
  // input states
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { signUp } = useUserAuth();
  const navigate = useNavigate();
  const { logIn, googleSignIn } = useUserAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();

    console.log("Sign up clicked");

    setError("");

    try {
      const { user } = await signUp(email, password);

      console.log(user);

      //callling firestore users
      await createUserDocument(user, { firstName, lastName });

      //navigate to login
      navigate("/");
    } catch (err) {
      setError(err.message);
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
    <div className="sign-up-page">
      <div className="yapa-images animate__animated animate__pulse">
        <div className="side-images"></div>
      </div>
      <div className="signup-content">
        <div className="yapa-logo yapa-logo-signup animate__animated animate__fadeInDown"></div>
        <h2 className="login-text signup-text animate__animated animate__flipInX">
          Create an account
        </h2>
        {error && <h5>{error}</h5>}
        {/* signup form  */}
        <form
          className="SignUp-form animate__animated animate__fadeIn"
          onSubmit={handleSignUp}
        >
          {/* first name  */}
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>

          {/* last name  */}
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>

          {/* email  */}
          <input
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

          {/* confirm password  */}
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>

          <button className="btn signup-btn" type="submit">
            Create Account
          </button>
          <p className="other-login">or continue with</p>
          <div className="fa animate__animated animate__fadeInUp">
            <i
              className="google-logo fa-brands fa-google fa-2x"
              onClick={handleGoogleSignIn}
            ></i>
            {/* <i class="fa-brands fa-facebook fa-2x"></i>
                  <i class="fa-brands fa-github fa-2x"></i> */}
            {/* <i class="fa-brands fa-twitter fa-2x"></i> */}
          </div>
        </form>

        <div className="login sign-up animate__animated animate__fadeInRight">
          Already using YAPA ?
          <Link className="login-now" to="/">
            {" "}
            Log In
          </Link>
        </div>
        <h4></h4>
      </div>
    </div>
  );
}

export default SignUp;
