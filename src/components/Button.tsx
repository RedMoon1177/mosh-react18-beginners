import React from "react";

interface Props {
  children: string;
  //   color?: string; // this is optional
  color?: "primary" | "secondary" | "danger"; // add color validation
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  // the onClick function will be passed from the outside (App.tsx)
  // set default --> color = primary
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
