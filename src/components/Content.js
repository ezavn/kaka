import React from "react";
import Title from "./common/Title";

const contents = [
  {
    id: 1,
    image: "/images/content-1.png",
    title: "Phần 1",
    content: "Tư duy và niềm tin của một người bán hàng xuất sắc",
  },
  {
    id: 2,
    image: "/images/content-2.png",
    title: "Phần 2",
    content: "Thiết lập mục tiêu và kiểm soát con số trong bán hàng",
  },
  {
    id: 3,
    image: "/images/content-3.png",
    title: "Phần 3",
    content: "Kỹ năng đọc vị, đặt câu hỏi và tạo sự ảnh hưởng lên khách hàng",
  },
  {
    id: 4,
    image: "/images/content-4.png",
    title: "Phần 4",
    content: "Xây dựng thói quen tốt cho người bán hàng",
  },
  {
    id: 5,
    image: "/images/content-5.png",
    title: "Phần 5",
    content: "Sales Excellence Program",
  },
];

const Content = () => {
  return (
    <section className="content bg-blue">
      <div className="page-container--lg md:py-section py-sectionMB">
        <Title className="text-center mb-[35px] md:mb-[50px]">
          NỘI DUNG <br className="block md:hidden" />
          <span className="leading-[1.6] md:leading-[1] font-semibold text-[38px] md:text-[52px] lg:text-[64px] text-white">
            HUẤN LUYỆN
          </span>
        </Title>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-[35px] items-start">
          {contents &&
            contents.map((item) => (
              <ContentItem key={item.id} image={item.image} title={item.title}>
                {item.content}
              </ContentItem>
            ))}
        </div>
      </div>
    </section>
  );
};

const ContentItem = ({ image, title, children }) => {
  return (
    <div className="flex flex-col flex-1">
      <div className="w-full h-full rounded-[10px] flex-shrink-0 mb-[10px]">
        <img
          src={image}
          className="rounded-[10px] w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="flex items-baseline gap-x-[9px] flex-1">
        <div className="w-[9px] h-[9px] md:w-[12px] md:h-[12px] rounded-full bg-red flex-shrink-0"></div>
        <div>
          <h4 className="text-[20px] md:text-[30px] font-semibold text-white flex-1">
            {title}
          </h4>
          <p className="font-semibold text-white">{children}</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
