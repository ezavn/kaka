import React, { useEffect } from "react";
import Button from "./common/Button";
import Countdown from "./common/Countdown";
import Form from "./common/Form";
import Title from "./common/Title";
import AOS from "aos";
import "aos/dist/aos.css";

const Register = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section
      id="register-form"
      className="register bg-[url('../public/images/bg-register.png')] bg-center bg-cover bg-no-repeat"
    >
      <div className="flex flex-col items-center justify-between lg:flex-row page-container--md md:py-section py-sectionMB">
        <div data-aos="flip-left" data-aos-duration="1500">
          {/* <Title
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
            reverse
            className="text-center mb-[25px] md:mb-[45px]"
            subTitle="CHƯƠNG TRÌNH"
          >
            GIÁ VÉ
          </Title> */}
          {/* <div className="flex items-center mb-[25px]">
            <div>
              <img src="/images/ticket-1.png" alt="" />
            </div>
            <div>
              <img src="/images/ticket-2.png" alt="" />
            </div>
          </div> */}
          <div className="box-time flex flex-col items-center justify-center gap-y-[5px] mb-[20px] md:mb-[40px] p-[25px] md:p-[35px]">
            <div>
              <img srcSet="/icons/calendar-2.png 2x" alt="" />
            </div>
            <p className="font-semibold text-[24px] text-blue">
              Thời gian diễn ra
            </p>
            <p className="font-bold"> Thứ 7, CN Ngày 22-23/10/2022</p>
          </div>
          <div className="text-center">
            <h4 className="font-bold text-[20px] md:text-[32px] text-blue">
              <p className="text-[24px] leading-[1]">
                CHO <span className="text-[64px]">20</span> SUẤT
              </p>
              <p>ĐĂNG KÝ SỚM NHẤT</p>
            </h4>
            <Countdown></Countdown>
            {/* <Button
              href="#register-form"
              className="hidden lg:inline-flex lg:mb-0 mt-[10px]"
            >
              Đăng ký ngay hôm nay
            </Button> */}
          </div>
        </div>
        <div
          data-aos="flip-right"
          data-aos-duration="1500"
          className="flex items-start justify-center mt-[40px] md:mt-[50px] lg:mt-0 flex-1 w-full"
        >
          <Form></Form>
        </div>
      </div>
    </section>
  );
};

export default Register;
