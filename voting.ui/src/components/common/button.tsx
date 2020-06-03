import * as React from "react";

interface Props {
  text: string;
  btnStyle: string;
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<Props> = ({
  text,
  btnStyle = "btn btn-primary btn-sm",
  clickHandler,
}) => {
  return (
    <button className={btnStyle} onClick={clickHandler} data-test-id="button">
      {text}
    </button>
  );
};
