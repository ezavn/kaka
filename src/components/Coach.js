import React from "react";
import Title from "./common/Title";

const Coach = () => {
  return (
    <section
      id="coach"
      className="coach page-container mb-sectionMB md:mb-section lg:mb-0"
    >
      <Title
        subTitle="TẠI CHƯƠNG TRÌNH"
        reverse
        className="text-center mb-[30px]"
      >
        DIỄN GIẢ
      </Title>
      <div className="flex flex-col-reverse items-center lg:items-end lg:flex-row xl:items-start">
        <div>
          <div className="flex-1 mt-[30px] md:mt-0">
            <p className="text-[18px] md:text-[24px] font-semibold text-black">
              Business COACH
            </p>
            <h3 className="font-bold text-[42px] md:text-[64px] text-red mb-[20px] md:mb-0">
              KAKA{" "}
              <span className="text-[32px] md:text-[40px] text-blue2">
                Lê Ngọc Đăng
              </span>
            </h3>
          </div>
          <div className="flex flex-col gap-y-[20px] md:gap-y-[35px]">
            <Info icon="/icons/coach-icon-1.png" title="TẦM NHÌN">
              Thế giới hạnh phúc hơn khi mọi người tin nhau.
            </Info>
            <Info icon="/icons/coach-icon-2.png" title="SỨ MỆNH">
              <p>- Thúc đẩy khách hàng hành động đến cùng.</p>
              <p>- Xây dựng "dream team" cam kết vì mục tiêu chung.</p>
              <p>- Nâng tầm nhà cung ứng để chơi cùng thắng.</p>
              <p>- Giữ được tiền & tăng tiền cho nhà đầu tư theo thời gian.</p>
            </Info>
            <Info icon="/icons/coach-icon-3.png" title="HỌC VỊ">
              Kỹ sư xây dựng, công trình thủy thềm lục địa
            </Info>
            <Info icon="/icons/coach-icon-4.png" title="KINH NGHIỆM">
              16 năm quản lý nhà nước, thi công, giám đốc dự án, giám đốc kinh
              doanh, chủ doanh nghiệp xây dựng công trình giao thông, dân dụng,
              công nghiệp & nhà cao tầng.
            </Info>
          </div>
        </div>
        <div className="h-[400px] md:h-[550px] w-auto lg:h-auto lg:w-[560px] xl:w-[640px] flex-shrink-0">
          <img
            src="/images/coach.png"
            className="object-cover w-full h-full"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

const Info = ({ icon, title, children }) => {
  return (
    <div className="flex items-start gap-x-[35px]">
      <div className="w-[58px] h-[58px] flex items-center justify-center bg-[#A9DAFC] flex-shrink-0">
        <img srcSet={`${icon} 2x`} alt="" />
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-[18px] text-black">{title}</h4>
        <div className="font-medium text-black">{children}</div>
      </div>
    </div>
  );
};

export default Coach;
