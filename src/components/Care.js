import React, { useEffect } from "react";
import Title from "./common/Title";
import AOS from "aos";
import "aos/dist/aos.css";

const cares = [
  {
    id: 1,
    image: "bg-[url('../public/images/care-1.png')]",
    icon: "/icons/care-icon-1.png",
    number: "01",
    content: "Sản phẩm rất tốt, nhưng Doanh thu vẫn không thấy?",
  },
  {
    id: 2,
    image: "bg-[url('../public/images/care-2.png')]",
    icon: "/icons/care-icon-2.png",
    number: "02",
    content: "Chiến lược Marketing tuyệt vời, nhưng tỉ lệ chốt sale vẫn thấp?",
  },
  {
    id: 3,
    image: "bg-[url('../public/images/care-3.png')]",
    icon: "/icons/care-icon-3.png",
    number: "03",
    content: "Đội ngũ bán hàng đông, nhưng hàng tồn kho ngày một nhiều thêm?",
  },
  {
    id: 4,
    image: "bg-[url('../public/images/care-4.png')]",
    icon: "/icons/care-icon-4.png",
    number: "04",
    content:
      "Đào tạo đội ngũ liên tục, nhưng lý thuyết với hành động là một trời một vực?",
  },
];

const Care = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="care page-container md:mb-section mb-sectionMB">
      <Title
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        subTitle="NHỮNG VẤN ĐỀ"
        className="text-center mb-[50px]"
      >
        ANH/CHỊ BẬN TÂM
      </Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
        {cares &&
          cares.map((item) => (
            <CareItem
              key={item.id}
              image={item.image}
              icon={item.icon}
              number={item.number}
            >
              {item.content}
            </CareItem>
          ))}
      </div>
    </section>
  );
};

const CareItem = ({ image, icon, number, children }) => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1500"
      className="relative flex flex-col items-center justify-center"
    >
      <div
        className={`${image} bg-center bg-cover bg-no-repeat w-[250px] h-[250px] rounded-full flex items-center justify-center flex-shrink-0`}
      >
        <img srcSet={`${icon} 2x`} alt="" />
      </div>
      <div className="flex-1 font-semibold text-center mt-[50px]">
        {children}
      </div>
      <div className="flex items-center justify-center w-[62px] h-[62px] rounded-full bg-red font-bold text-[24px] text-white absolute top-[219px]">
        {number}
      </div>
    </div>
  );
};

export default Care;
