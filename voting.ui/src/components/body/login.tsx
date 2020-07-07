import * as React from "react";

interface IProps {}

const Login: React.FunctionComponent<IProps> = () => {
  return (
    <div>
      <div data-test-id="login-email">This is email placeholder</div>
      <div data-test-id="login-password">This is password</div>
    </div>
  );
};

export default Login;
