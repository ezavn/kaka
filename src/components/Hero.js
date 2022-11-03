import React from "react";

const Hero = () => {
  return (
    <section className="flex items-center justify-center hero w-full h-[610px] md:h-[720px] xl:h-[100vh] bg-[url('../public/images/bg-hero2.png')] bg-cover bg-right md:bg-center bg-no-repeat mb-sectionMB md:mb-section">
      <div className="flex flex-col hero-content page-container max-w-[690px]">
        <div className="xl:translate-x-[200px]">
          <p className="relative z-10 text-[20px] inline-block text-center md:text-[36px] font-medium leading-none uppercase text-white">
            CHƯƠNG TRÌNH
          </p>
          <h1 className="hero-heading font-black text-[50px] md:text-[100px] lg:text-[128px] uppercase text-red leading-[1]">
            SALES PRO
          </h1>
          {/* <div className="px-5 py-2 text-[12px] md:text-[20px] font-medium text-white rounded-[5px] bg-blue inline-block uppercase mt-[10px]">
            Dành cho Giám đốc kinh doanh, Nhân viên bán hàng
          </div> */}
        </div>
        <div className="xl:translate-x-[200px] mt-[20px]">
          <div className="w-[100%] px-5 py-2 text-[12px] md:text-[20px] font-medium text-white rounded-t-[8px] bg-blue inline-block uppercase mt-[10px]">
            Dành cho Giám đốc kinh doanh, Nhân viên bán hàng
          </div>
          <div className="w-[100%] rounded-b-[8px] self-end px-[20px] py-[15px] md:px-[45px] md:py-[26px] bg-white inline-flex items-center">
            <div className="flex items-center">
              <div className="w-[25px] h-[25px] md:w-auto md:h-auto">
                <img
                  srcSet="/icons/calendar.png 2x"
                  className="w-full h-full"
                  alt=""
                />
              </div>
              <div className="flex flex-col font-semibold text-[10px] md:text-[20px] text-black2 ml-[15px]">
                <span>08h30 - 17h00</span>
                <span>T7 - CN, Ngày 19 - 20/11/2022</span>
              </div>
            </div>
            <div className="h-[47px] w-[2px] bg-black2 mx-[15px]"></div>
            <div className="flex items-center">
              <div className="w-[25px] h-[25px] md:w-auto md:h-auto">
                <img
                  srcSet="/icons/group.png 2x"
                  className="w-full h-full"
                  alt=""
                />
              </div>
              <div className="flex flex-col font-semibold text-[10px] md:text-[20px] text-black2 ml-[15px]">
                <span>Hình thức</span>
                <span>OFFLINE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
