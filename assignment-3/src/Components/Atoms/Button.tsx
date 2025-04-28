import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-4 py-2 rounded ${
        variant === "primary" ? "bg-black text-white" : "bg-gray-200 text-black"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
