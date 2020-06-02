import * as React from "react";

interface IProps {}

const Header: React.SFC<IProps> = () => {
  return (
    <div>
      <img data-test-id="header-logo" alt="logo" src="" />
      <a data-test-id="header-login">Login</a>
    </div>
  );
};

export default Header;
