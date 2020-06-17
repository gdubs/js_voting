import * as React from "react";
import { Link } from "react-router-dom";

interface IProps {}

const Header: React.SFC<IProps> = () => {
  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-end"
    >
      <img data-test-id="header-logo" alt="logo" src="" />
      <div className="ml-auto mr-1" test-id="links">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/polls">
              Polls
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-test-id="header-login">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
