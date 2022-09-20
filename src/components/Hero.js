import React from "react";

const Hero = () => {
  return (
    <section className="flex items-center justify-center hero w-full h-[610px] md:h-[720px] xl:h-[100vh] bg-[url('../public/images/hero.png')] bg-cover bg-center bg-no-repeat mb-sectionMB md:mb-section">
      <div className="flex flex-col hero-content page-container max-w-[690px]">
        <div>
          <p className="text-[20px] md:text-[36px] font-medium leading-none uppercase text-black2">
            CHƯƠNG TRÌNH
          </p>
          <h1 className="font-black text-[64px] md:text-[128px] uppercase text-red leading-[1]">
            SALES PRO
          </h1>
          <div className="px-5 py-2 text-[12px] md:text-[20px] font-medium text-white rounded-[5px] bg-blue inline-block uppercase mt-[10px]">
            Dành cho Giám đốc kinh doanh, Nhân viên bán hàng
          </div>
        </div>
        <div className="self-end px-[20px] py-[15px] md:px-[45px] md:py-[26px] rounded-[10px] bg-[rgba(255,_255,_255,_0.49)] inline-flex items-center mt-[63px]">
          <div className="flex items-center">
            <div className="w-[25px] h-[25px] md:w-auto md:h-auto">
              <img
                srcSet="/icons/calendar.png 2x"
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="flex flex-col font-semibold text-[12px] md:text-[20px] text-black2 ml-[15px]">
              <span>08h30 - 17h00</span>
              <span>Thứ Bảy, Ngày 00/00/2022</span>
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
            <div className="flex flex-col font-semibold text-[12px] md:text-[20px] text-black2 ml-[15px]">
              <span>Hình thức</span>
              <span>OFFLINE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
