import React, { useEffect } from "react";
import Button from "./common/Button";
import Title from "./common/Title";
import AOS from "aos";
import "aos/dist/aos.css";

const Sale = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="flex flex-col items-center md:flex-row sale page-container--lg md:mb-section mb-sectionMB">
      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        className="w-auto md:w-[380px] lg:w-[590px] lg:h-[390px]"
      >
        <img
          src="/images/sale-1.png"
          className="inline-block object-cover w-full h-full"
          alt=""
        />
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1500"
        className="text-center md:text-left mt-[20px] md:mt-0 md:ml-[30px] lg:ml-[96px]"
      >
        <p className="flex justify-center md:justify-start items-center mb-[10px]">
          <img
            srcSet="/icons/dot-icon.png 2x"
            className=" mr-[10px] inline-block"
            alt=""
          />
          <span>Hãy tham gia cùng chúng tôi</span>
        </p>
        <Title subTitle="Chương trình" className="mb-[20px] md:mb-[30px]">
          SALES PRO
        </Title>
        <div>
          <h4 className="font-bold text-[18px] text-[#00558F] mb-[10px]">
            Đối tượng tham dự
          </h4>
          <StarItem>Giám đốc kinh doanh</StarItem>
          <StarItem>Nhân viên bán hàng</StarItem>
          <Button href="#register-form" className="mt-[25px] md:mt-[55px]">
            Đăng ký ngay hôm nay
          </Button>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        className="hidden ml-auto lg:block"
      >
        <img src="/images/sale-2.png" alt="" />
      </div>
    </section>
  );
};

const StarItem = ({ children }) => {
  return (
    <div className="flex justify-center md:justify-start items-center gap-x-[14px]">
      <img srcSet="/icons/star-icon.png 2x" alt="" />
      <p className="text-[16px] md:text-[20px]">{children}</p>
    </div>
  );
};

export default Sale;
