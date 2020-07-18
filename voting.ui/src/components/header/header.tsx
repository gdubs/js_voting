import * as React from "react";
import { Link } from "react-router-dom";

interface IProps {}

const Header: React.SFC<IProps> = () => {
  return (
    <header>
      <nav id="navbar" className="navbar navbar-expand-lg  navbar-dark">
        <a href="#" className="navbar-brand">
          Vote
        </a>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav ml-auto">
            <Link className="nav-item nav-link" to="/polls">
              Polls
            </Link>
            <Link className="nav-item nav-link" to="/account">
              <img className="rounded-circle" src="http://placehold.it/30x30" />
              <span className="ml-2">You</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
