import React from "react";

const Title = ({ children, subTitle = "", reverse, className = "", white }) => {
  return (
    <div
      className={`flex flex-col gap-y-[10px] ${
        reverse ? "flex-col-reverse" : ""
      } ${className}`}
    >
      <p
        className={`font-semibold text-[24px] md:text-[30px] leading-[1] ${
          white ? "text-white" : "text-blue2"
        }`}
      >
        {subTitle}
      </p>
      <h2
        className={`font-bold text-[38px] md:text-[52px] lg:text-[64px] leading-[1] ${
          white ? "text-white" : "text-red"
        }`}
      >
        {children}
      </h2>
    </div>
  );
};

export default Title;
