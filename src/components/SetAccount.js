import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase.js";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "../css/SetAccount.css";

const SetAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accountMessage, setAccountMessage] = useState("");
  const navigate = useNavigate();
  const onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
    else if (name === "name") setName(value);
    else if (name === "confirmPassword") setConfirmPassword(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("user", res.user);
        const user = res.user;
        setDoc(doc(db, "users", user.uid), {
          name: name,
          email: email,
          id: user.uid,
          cart: [],
        });
      })
      .catch((error) => console.log(error.message));
    setAccountMessage("Account created Succesfully");
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  };
  return (
    <div className="form_container">
      <form className="setaccount_form" onSubmit={onSubmit}>
        <div className="input_container">
          <label>Enter Name</label>
          <br></br>
          <input
            type="text"
            className="name"
            name="name"
            value={name}
            onChange={onInputChange}
          ></input>
        </div>
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
        <div className="input_container">
          <label>Confirm Password</label>
          <br></br>
          <input
            type="text"
            className="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onInputChange}
          ></input>
        </div>
        <button>Sign Up</button>
        <h2 className="accountMessage">{accountMessage}</h2>
      </form>
    </div>
  );
};

export default SetAccount;
