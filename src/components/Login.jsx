import React from "react";

const Login = props => {
  return (
    <div className="form">
      <h1>LogIn</h1>
      <form  onSubmit={props.handleSubmit}>
        {props.renderInput("email", "Email")}
        {props.renderInput("password", "Password", "password")}
        <button className="btnsub"> LogIn </button>
      </form>
    </div>
  );
};

export default Login;