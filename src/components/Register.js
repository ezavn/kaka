import React from "react";
import Button from "./common/Button";
import Countdown from "./common/Countdown";
import Form from "./common/Form";
import Title from "./common/Title";

const Register = () => {
  return (
    <section id="register-form" className="register">
      <div className="flex flex-col items-center justify-between lg:flex-row page-container--md md:py-section py-sectionMB">
        <div>
          <Title
            reverse
            className="text-center mb-[25px] md:mb-[45px]"
            subTitle="CHƯƠNG TRÌNH"
          >
            GIÁ VÉ
          </Title>
          <div className="flex items-center mb-[25px]">
            <div>
              <img src="/images/ticket-1.png" alt="" />
            </div>
            <div>
              <img src="/images/ticket-2.png" alt="" />
            </div>
          </div>
          <div className="text-center">
            <h4 className="font-bold text-[20px] md:text-[24px] text-black">
              CHO 20 SUẤT ĐĂNG KÝ SỚM NHẤT
            </h4>
            <Countdown></Countdown>
            <Button
              href="#register-form"
              className="hidden lg:inline-flex lg:mb-0 mt-[10px]"
            >
              Đăng ký ngay hôm nay
            </Button>
          </div>
        </div>
        <div className="flex items-start justify-center mt-[50px] lg:mt-0 flex-1 w-full">
          <Form></Form>
        </div>
      </div>
    </section>
  );
};

export default Register;
