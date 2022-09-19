import React from "react";

const Button = ({
  href = "",
  type = "button",
  children,
  small,
  className = "",
  secondary,
  isDisable = false,
}) => {
  if (href !== "" && typeof href === "string") {
    return (
      <a
        href={href}
        className={` ${
          secondary ? "bg-blue" : "bg-red"
        } w-[225px] h-[47px] inline-flex text-white uppercase rounded-[12px] items-center justify-center font-bold text-[14px] ${
          small ? "w-[155px]" : ""
        } ${isDisable ? "opacity-50" : ""} ${className}`}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      type={type}
      className={` ${
        secondary ? "bg-blue w-[208px]" : "bg-red"
      } w-[225px] h-[47px] inline-flex text-white uppercase rounded-[12px] items-center justify-center font-bold text-[14px] ${
        isDisable ? "opacity-50" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
