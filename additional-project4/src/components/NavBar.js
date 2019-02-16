import React from "react";
const NavBar = ({ user, changeForm, logout, changeActivePage }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand" />

        <div className="NavBar">
          <ul className="navbar-nav">
            {// if the user is not authenticated
            !user && (
              <React.Fragment>
                <li
                  onClick={() => {
                    changeForm("signup");
                    changeActivePage("signup");
                  }}
                >
                  <div>Signup</div>
                </li>
                <li
                  className="nav-item active"
                  onClick={() => {
                    changeForm("login");
                    changeActivePage("login");
                  }}
                >
                  <div>Login</div>
                </li>
              </React.Fragment>
            )}
            {user && (
              <React.Fragment>
                <li
                  className="nav-item active"
                  onClick={() => {
                    logout();
                    changeActivePage("logout");
                  }}
                >
                  <div>Logout</div>
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
      </nav>
      <div />
    </div>
  );
};

export default NavBar;
