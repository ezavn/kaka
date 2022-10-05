import React, { useEffect } from "react";
import Title from "./common/Title";
import AOS from "aos";
import "aos/dist/aos.css";

const Coach = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section
      id="coach"
      className="coach page-container mb-sectionMB md:mb-section lg:mb-0"
    >
      <Title
        subTitle="TẠI CHƯƠNG TRÌNH"
        reverse
        className="text-center mb-[30px]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        DIỄN GIẢ
      </Title>
      <div className="flex flex-col-reverse items-center lg:flex-row xl:items-start">
        <div data-aos="fade-right" data-aos-duration="1500">
          <div className="flex-1 mt-[30px] md:mt-0">
            <p className="text-[18px] md:text-[24px] font-semibold text-black">
              Business COACH
            </p>
            <h3 className="font-bold text-[42px] md:text-[64px] text-red mb-[20px] md:mb-0">
              THEO{" "}
              <span className="uppercase text-[32px] md:text-[40px] text-blue2">
                Vũ Bá Thế
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
            {/* <Info icon="/icons/coach-icon-3.png" title="HỌC VỊ">
              Kỹ sư xây dựng, công trình thủy thềm lục địa
            </Info>
            <Info icon="/icons/coach-icon-4.png" title="KINH NGHIỆM">
              16 năm quản lý nhà nước, thi công, giám đốc dự án, giám đốc kinh
              doanh, chủ doanh nghiệp xây dựng công trình giao thông, dân dụng,
              công nghiệp & nhà cao tầng.
            </Info> */}
            <a
              href="https://drive.google.com/file/d/1twYoi_If5wVl1tmhYeX7DYPVmOziWaQA/view?usp=sharing"
              className="flex cursor-pointer btn-profile"
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-center bg-blue p-[15px] font-medium text-[10px] md:text-[14px] text-[#fff]">
                5 ĐIỀU QUAN TRỌNG NHẤT CẦN BIẾT VỀ <br /> NHÀ HUẤN LUYỆN DOANH
                NGHIỆP THEO VŨ BÁ THẾ
              </p>
              <div className="bg-red p-[15px] flex items-center justify-center">
                <img srcSet="/icons/arrow.png 2x" alt="" />
              </div>
            </a>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          className="h-[400px] md:h-[550px] w-auto lg:h-auto lg:w-[560px] xl:h-[600px] xl:w-[640px] flex-shrink-0"
        >
          <img
            src="/images/coachTheo.png"
            className="object-contain w-full h-full"
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
