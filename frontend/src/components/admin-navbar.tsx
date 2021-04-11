import React from "react";
import { Link, withRouter } from "react-router-dom";

{/* This is a filler navbar so I can work on multiple pages,
I plan on trashing this in favor of shiva's navbar component */}

type Props = {
  location : any
}

function NavBar(props: Props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Americorps
          </Link>

          <div>
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/Users" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/Users">
                  Users
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(NavBar);