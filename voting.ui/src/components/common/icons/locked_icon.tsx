import * as React from "react";

const LockedIcon = () => {
  return (
    <svg
      width="2em"
      height="2em"
      viewBox="0 0 18 18"
      className="bi bi-lock-fill svg-icon"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.5 9a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9z" />
      <path
        fill-rule="evenodd"
        d="M4.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"
      />
    </svg>
  );
};

export default LockedIcon;
