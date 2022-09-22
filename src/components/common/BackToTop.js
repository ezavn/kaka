import React from "react";

const BackToTop = () => {
  const handleBackToTop = () => {};
  return (
    <div
      onClick={handleBackToTop}
      className="rounded-[8px] flex items-center justify-center w-[30px] h-[40px] bg-blue fixed bottom-[20px] right-[20px]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 11l7-7 7 7M5 19l7-7 7 7"
        />
      </svg>
    </div>
  );
};

export default BackToTop;
