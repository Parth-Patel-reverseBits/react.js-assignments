import React from "react";

const Button = (props: ButtonProps) => {
  const { children } = props;
  return (
    <>
      <button
        className="bg-black text-white text-2xl py-2 px-5 rounded-[5px] cursor-pointer"
        {...props}
      >
        {children}
      </button>
    </>
  );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default Button;
