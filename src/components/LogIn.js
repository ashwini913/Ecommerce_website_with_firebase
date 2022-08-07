import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";
import { login } from "../actions/index.js";
import { getDoc, doc } from "firebase/firestore";
import { connect, useDispatch } from "react-redux";
import { db } from "../firebase.js";
import { useNavigate } from "react-router-dom";
import "../css/LogIn.css";

const LogIn = ({ user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState(user);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };
  useEffect(() => {
    dispatch(login(currentUser));
  }, [currentUser, dispatch]);

  const onLogInSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;
        dispatch(login(currentUser));
        setError("");
        getDoc(doc(db, "users", user.uid)).then((res) =>
          setCurrentUser(res.data())
        );
      })

      .catch((error) => setError(error.message));
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  return (
    <div className="form_container">
      <form className="login_form" onSubmit={onLogInSubmit}>
        <div className="input_container">
          <label>Enter Email</label>
          <br></br>
          <input
            type="text"
            className="email"
            name="email"
            value={email}
            onChange={onInputChange}
          ></input>
        </div>
        <div className="input_container">
          <label>Enter Password</label>
          <br></br>
          <input
            type="text"
            className="password"
            name="password"
            value={password}
            onChange={onInputChange}
          ></input>
        </div>
        <button>Login</button>
        <p>{console.log("error=>", error)}</p>
        <p>
          <Link to="/setAccount">New Account</Link>
        </p>
        {console.log("usersData=>", currentUser)}
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user_reducer.user,
  };
};
export default connect(mapStateToProps, { login })(LogIn);
