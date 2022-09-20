import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-[#1E1E1E] md:pt-[75px] pt-[40px] pb-[30px]">
      <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3 page-container text-white">
        <div>
          <a href="/" className="inline-block w-full max-w-[249px] mb-[20px]">
            <img
              srcSet="/images/logo.png 2x"
              alt=""
              className="object-cover w-full h-full"
            />
          </a>
          <p className="text-justify md:w-[285px]">
            ActionCOACH là thương hiệu huấn luyện doanh nghiệp hàng đầu thế
            giới, được Brad Sugars thành lập năm 1993 tại Brisbane, Australia
            trong thời điểm khái niệm về huấn luyện doanh nghiệp còn khá lạ lẫm
            đối với các quốc gia trên thế giới.
          </p>
        </div>
        <div>
          <h3 className="text-[24px] font-semibold mb-[20px] md:mb-[65px]">
            THÔNG TIN LIÊN HỆ
          </h3>
          <div>
            <div className="flex gap-x-[14px] items-baseline justify-start mb-[15px] md:mb-[25px]">
              <img srcSet="/icons/mark.png 2x" alt="" />
              <span>
                CBD BUILDING, 90-92 Lê Thị Riêng, P. Bến Thành, Q.1, TP.HCM
              </span>
            </div>
            <div className="flex gap-x-[14px] items-baseline justify-start mb-[15px] md:mb-[25px]">
              <img srcSet="/icons/envelope.png 2x" alt="" />
              <a href="mailto:acadesiq@mail.com">acadesiq@mail.com</a>
            </div>
            <div className="flex gap-x-[14px] items-baseline justify-start mb-[15px] md:mb-[25px]">
              <img srcSet="/icons/phone.png 2x" alt="" />
              <a href="tel:+1-202-555-0190">+1-202-555-0190</a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-[24px] font-semibold mb-[20px] md:mb-[65px]">
            FANPAGE CBD FIRM
          </h3>
          <div>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FActionCOACHCBDFirm%2F&tabs&width=280&height=&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=495083570829349"
              width={290}
              height={130}
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder={0}
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
