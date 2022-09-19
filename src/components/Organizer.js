import React from "react";
import Title from "./common/Title";

const Organizer = () => {
  return (
    <section className="organizer md:py-section py-sectionMB bg-[url('../public/images/organizer-bg.png')]">
      <div className="text-center page-container">
        <Title className="mb-[30px] md:mb-[40px]">ĐƠN VỊ TỔ CHỨC</Title>
        <p className="mb-[20px] md:mb-[35px] font-medium">
          ActionCOACH CBD Firm là văn phòng nhượng quyền của hệ thống
          ActionCOACH tại TP. HCM. <br /> Chúng tôi huấn luyện các chủ doanh
          nghiệp thông qua các hoạt động đồng hành, hướng dẫn, hỗ trợ, đặt câu
          hỏi và tạo động lực cho đến khi chủ doanh nghiệp tự <br /> tìm ra giải
          pháp cho thực trạng của doanh nghiệp mình.
        </p>
        <p className="font-medium">
          ActionCOACH CBD Firm cam kết mang lại những giá trị cao hơn sự đầu tư
          của Khách Hàng.
        </p>
      </div>
    </section>
  );
};

export default Organizer;
