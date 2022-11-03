import React, { useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <>
      <div
        onClick={scrollToTop}
        className={`backtotop cursor-pointer w-[38px] h-[38px] fixed right-[15px] bottom-[15px] bg-red flex items-center justify-center rounded-[8px] transition duration-700 z-[99] ${
          visible ? "translate-x-0" : "translate-x-[200px]"
        }`}
      >
        <img
          className="w-[24px] h-[24px]"
          src="/icons/backtotop-2.png"
          alt=""
        />
      </div>
    </>
  );
};

export default BackToTop;
