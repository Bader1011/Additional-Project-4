import React from "react";

const Login = props => {
  return (
    <div className="form">
      <h1>Login</h1><br/>
      <form  onSubmit={props.handleSubmit}>
        {props.renderInput("email", "Email")}
        {props.renderInput("password", "Password", "password")}
        <br/>
        <button className="btnsub"> Login </button>
        <br/><br/>
      </form>
    </div>
  );
};

export default Login;