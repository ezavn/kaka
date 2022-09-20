import React from "react";
import Title from "./common/Title";

const benefits = [
  {
    id: 1,
    icon: "/icons/benefit-icon-1.png",
    content: "Tăng doanh số bán hàng",
  },
  {
    id: 2,
    icon: "/icons/benefit-icon-2.png",
    content: "Kỹ thuật tăng tỷ lệ chuyển đổi",
  },
  {
    id: 3,
    icon: "/icons/benefit-icon-3.png",
    content: "Tạo ra đội ngũ bán hàng xuất sắc",
  },
  {
    id: 4,
    icon: "/icons/benefit-icon-4.png",
    content: "Vượt qua mọi lời từ chối",
  },
];

const Benefit = () => {
  return (
    <section
      id="value"
      className="benefit md:py-section py-sectionMB bg-[url('../public/images/benefit-bg.png')] bg-left lg:bg-center bg-no-repeat md:mb-section mb-sectionMB"
    >
      <div className="page-container--md h-auto md:h-[400px] lg:h-[538px] flex md:flex-row flex-col">
        <div className="hidden md:flex items-center justify-center w-[350px] lg:w-[394px] h-full bg-red flex-shrink-0 relative px-[40px] lg:px-[60px]">
          <div className="w-[45px] h-[45px] bg-white absolute top-0 left-0"></div>
          <Title
            subTitle="KHI THAM GIA CHƯƠNG TRÌNH"
            className="!text-white"
            reverse
            white
          >
            GIÁ TRỊ & LỢI ÍCH
          </Title>
        </div>
        <Title
          subTitle="KHI THAM GIA CHƯƠNG TRÌNH"
          reverse
          className="block mx-auto md:hidden mb-[30px] text-center"
        >
          GIÁ TRỊ & LỢI ÍCH
        </Title>
        <div className="grid grid-cols-2 gap-[4px] flex-1">
          {benefits &&
            benefits.map((item) => (
              <BenefitItem key={item.id} icon={item.icon}>
                {item.content}
              </BenefitItem>
            ))}
        </div>
      </div>
    </section>
  );
};

const BenefitItem = ({ icon, children }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-[20px] bg-white py-[30px] px-[20px]">
      <div className=" w-[50px] h-[60px] lg:w-[90px] lg:h-[110px] flex-shrink-0">
        <img
          srcSet={`${icon} 2x`}
          className="object-contain w-full h-full"
          alt=""
        />
      </div>
      <p className="text-center lg:text-left flex-1 font-semibold text-[16px] lg:text-[24px] text-blue2">
        {children}
      </p>
    </div>
  );
};

export default Benefit;
