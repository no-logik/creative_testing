import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

// import Input from "../../components/Input/input";
import useAuth from "../../hooks/useAuth";
import { Login } from "../../api/index";

import LoginArt from "../../assets/images/illustration-login.png";
import PixisLogo from "../../assets/images/pixis_logo.png";
import styles from "./login.module.css";

const login = () => {
  const [formDetails, setFormDetails] = useState({ email: "", password: "" });

  //////

  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  // const location = useLocation();

  //////

  useEffect(() => {
    if (!auth.userId) return;
    navigateUser(auth);
  }, [auth.userId, auth.role, auth.accessToken]);

  const navigateUser = (auth) => {
    if (auth.role === "agency") {
      navigate(`/agency/${auth.userId.toString()}`);
    } else if (auth.role === "admin") {
      navigate(`/admin/${auth.userId.toString()}`);
    }
  };

  const onSubmit = (formDetails) => {
    Login(formDetails)
      .then((res) => {
        const { user, role, accessToken } = res.data;
        setAuth((prev) => {
          return { ...prev, userId: user, role: role, accessToken: accessToken };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  ///////

  return (
    <div className={styles.container}>
      <div className={styles.art}>
        <img src={LoginArt} alt="Login Art" />
        <div className={styles.loginArtText}>
          <h1>Hello!! Welcome to Pixis Creative Testing Audit Dashboard</h1>
        </div>
      </div>
      <div className={styles.loginForm}>
        <img src={PixisLogo} className={styles.logo} alt="" />
        <h1>Welcome Back</h1>
        <h3>Use your email address and password to login</h3>
        <form>
          <label>Enter Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            onChange={(e) => setFormDetails({ ...formDetails, email: e.target.value })}
          />

          <br />
          <label>Enter Password </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            onChange={(e) => setFormDetails({ ...formDetails, password: e.target.value })}
          />
          <br />
          <input
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              onSubmit(formDetails);
            }}
            value="signin"
          />
        </form>
        <div className={styles.createAccount}>
          <span>Don't hav an account?</span>
          <Link to="login">Create Account</Link>
        </div>
      </div>
    </div>
  );
};

export default login;
