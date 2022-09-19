import React from "react";

const Hamburger = ({ className, onClick = () => {} }) => {
  return (
    <div
      onClick={onClick}
      className={`${className} relative h-[32px] w-[32px]`}
    >
      <input className="checkbox" type="checkbox" name="" id="" />
      <div className="hamburger-lines">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
    </div>
  );
};

export default Hamburger;
