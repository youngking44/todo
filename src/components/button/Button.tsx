import React from "react";

interface ButtonProps {
  size: string;
  variant: string;
  rounded?: boolean;
  handleClick: (value: React.FormEvent) => void;
  children: React.ReactNode;
}

const Button = ({
  size,
  variant,
  rounded,
  handleClick,
  children,
}: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`
        ${size === "small" ? "px-5 py-2 " : "px-10 py-4"} 
        ${rounded ? "rounded-full" : ""}
        ${
          variant === "primary"
            ? "text-white bg-pink-500 hover:bg-pink-500/70"
            : ""
        }
        ${
          variant === "secondary"
            ? "text-white bg-purple-500 hover:bg-purple-500/70"
            : ""
        }
        ${variant === "neutral" ? "text-white bg-black hover:bg-black/70" : ""}
        font-bold cursor-pointer transition-all ease-in-out duration-300`}
    >
      {children}
    </button>
  );
};

export default Button;
