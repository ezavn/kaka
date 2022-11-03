import React, { useState } from "react";
import Button from "./common/Button";
import Hamburger from "./common/Hamburger";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleToggleHamburger = () => {
    setShow((show) => !show);
  };
  return (
    <header className="header bg-blue py-[15px] text-white h-[70px] relative">
      <div className="flex items-center justify-between w-full h-full page-container">
        <a href="./" className="inline-block w-full max-w-[140px]">
          <img
            srcSet="/images/logo.png 2x"
            className="object-cover w-full h-full"
            alt=""
          />
        </a>
        <div className="hidden md:flex items-center menu gap-x-[50px]">
          <a
            href="#content"
            className="font-bold uppercase transition-all duration-500 font-lato hover:text-red"
          >
            NỘI DUNG
          </a>
          <a
            href="#value"
            className="font-bold uppercase duration-500 font-lato hover:text-red"
          >
            GIÁ TRỊ
          </a>
          <a
            href="#coach"
            className="font-bold uppercase duration-500 font-lato hover:text-red"
          >
            DIỄN GIẢ
          </a>
        </div>
        <Button
          small
          href="#register-form"
          className="hidden btn-header md:inline-flex"
        >
          ĐĂNG KÝ NGAY
        </Button>
        {show && (
          <div className="absolute top-[100%] left-0 right-0 bg-blue py-[30px] z-[999]">
            <div className="flex items-center menu gap-x-[50px] flex-col gap-y-[15px]">
              <a href="#content" className="font-bold uppercase font-lato">
                NỘI DUNG
              </a>
              <a href="#value" className="font-bold uppercase font-lato">
                GIÁ TRỊ
              </a>
              <a href="#coach" className="font-bold uppercase font-lato">
                DIỄN GIẢ
              </a>
            </div>
            <div className="text-center mt-[15px]">
              <Button small href="#register-form">
                ĐĂNG KÝ NGAY
              </Button>
            </div>
          </div>
        )}
        <Hamburger
          className="block ml-auto md:hidden"
          onClick={handleToggleHamburger}
        ></Hamburger>
      </div>
    </header>
  );
};

export default Header;
