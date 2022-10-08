import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="slider">
      <div className="slider-item">
        <div className="slider-image">
          <img src="/images/slider-1.jpg" alt="" />
        </div>
        <div className="slider-content">
          <h3>
            1. CÙNG BẠN TẠO NÊN SỰ THỊNH VƯỢNG CHO VIỆT NAM THÔNG QUA HOẠT ĐỘNG
            TÁI ĐÀO TẠO DOANH NGHIỆP
          </h3>
          <p>
            Ở thời điểm ActionCOACH còn rất mới mẻ ở Việt Nam, TheO là người
            tiên phong ứng dụng hệ thống Huấn luyện số 1 Thế giới cho rất nhiều
            doanh nghiệp Việt Nam phát triển, tạo ra lợi nhuận theo cấp số nhân.
            Những doanh nghiệp mà Coach TheO trực tiếp huấn luyện đa dạng ngành
            nghề, bao gồm các doanh nghiệp từ bờ vực phá sản, start-up đến doanh
            nghiệp trên 1,000 tỉ VNĐ. Có doanh nghiệp sau khi làm việc với Nhà
            huấn luyện TheO, tháng đầu tiên đã tạo ra lợi nhuận lớn hơn trị giá
            hợp đồng coaching trong 1 năm; có doanh nghiệp bên bờ vực phá sản
            nhưng sau 3 tháng coaching đã có được lợi nhuận; có doanh nghiệp
            nhân 10 lần lợi nhuận và tốc độ tăng trưởng chỉ sau 11 tháng làm
            việc với Nhà huấn luyện TheO Vũ Bá Thế.
          </p>
          <p>
            Chỉ sau 12 tháng được Certified BusinessCOACH (cấp chứng chỉ Nhà
            Huấn luyện của cty Business COACH số 1 Thế giới), Coach TheO liên
            tục có tên trên bảng xếp hạng trong khu vực và trên Thế giới. Năm
            2019, TheO 2 lần liên tiếp lọt vào TOP 25 Nhà Huấn luyện có doanh
            thu cao nhất toàn cầu; xếp thứ 4 trong 10 Nhà Huấn luyện có Doanh
            thu cao nhất ActIonCOACH SEA (khu vực Đông Nam Á). Năm 2020, TheO Vũ
            Bá Thế tiếp tục có thêm 5 lần nữa vào Top 25 Nhà Huấn luyện có doanh
            thu cao nhất toàn cầu (bảng xếp hạng được ActionCOACH toàn cầu đo
            lường bằng doanh thu cạnh tranh với 1,600 COACHes ở 85 quốc gia trên
            toàn thế giới).
          </p>
        </div>
      </div>
      <div className="slider-item">
        <div className="slider-image">
          <img src="/images/slider-2.jpg" alt="" />
        </div>
        <div className="slider-content">
          <h3>
            2. CHUYÊN GIA HUẤN LUYỆN THAY ĐỔI “NHÂN DẠNG” – GIÚP BẠN TRỞ THÀNH
            PHIÊN BẢN TỐT NHẤT CỦA CHÍNH MÌNH
          </h3>
          <p>
            Với lợi thế am hiểu bộ môn khoa học hành vi DISC và Motivators (các
            yếu tố tạo động lực bên trong), Coach TheO đã training cho hàng ngàn
            người sử dụng công cụ DISC & Motivators ứng dụng trong công việc và
            cuộc sống, cải thiện mối quan hệ và gia tăng hiệu suất lao động.
          </p>
          <p>
            Là chuyên gia hàng đầu được Cấp bản quyền huấn luyện của Assessment
            24x7 - tổ chức uy tín hàng đầu về trắc nghiệm phong cách hành vi ứng
            dụng trong công việc và cuộc sống, Coach TheO sử dụng thành thạo
            công cụ này để giúp các Chủ doanh nghiệp trở thành phiên bản tốt
            nhất mà họ mong muốn hướng tới.
          </p>
        </div>
      </div>
      <div className="slider-item">
        <div className="slider-image">
          <img src="/images/slider-4.jpg" alt="" />
        </div>
        <div className="slider-content">
          <h3>3. GIỎI HƠN 1% MỖI NGÀY!</h3>
          <p>
            Giỏi đồng nghĩa với dừng lại, chúng ta cần phải giỏi hơn mỗi ngày để
            tạo nên những điều vĩ đại! Là một trong những người trẻ nhất khu vực
            Đông Nam Á được cấp chứng nhận của ActionCOACH, TheO Vũ Bá Thế không
            vì thế mà cho phép mình được đi chậm. Nhà huấn luyện luôn chủ động
            phát triển bản thân, đồng thời luôn đặt ra những yêu cầu cao với
            Khách hàng. Quan điểm của TheO là: “kinh doanh không cạnh tranh, vì
            cạnh tranh là sẽ có kẻ thắng người thua, kinh doanh chính là sáng
            tạo, vì khi sáng tạo, chúng ta giỏi lên.
          </p>
          <p>
            Giống như việc chúng ta bày ra một trò chơi mà tất cả mọi người cùng
            thắng: khách hàng thắng vì có chất lượng dịch vụ tốt nhất; nhân viên
            thắng vì có môi trường làm việc tuyệt vời; nhà cung ứng thắng vì
            tham gia vào chuỗi hoạt động giá trị; đối tác/cổ đông thắng khi đầu
            tư, và hiển nhiên, trò chơi này chủ doanh nghiệp thắng khi họ có
            thêm lợi nhuận, thời gian, đội ngũ và phong cách sống mà bạn thực sự
            mong muốn hướng đến.
          </p>
        </div>
      </div>
      <div className="slider-item">
        <div className="slider-image">
          <img src="/images/slider-3.jpg" alt="" />
        </div>
        <div className="slider-content">
          <h3>
            4. GẮN KẾT NHÂN SỰ GIÚP TIẾT KIỆM 34% QUỸ LƯƠNG CỦA DOANH NGHIỆP
          </h3>
          <p>
            Ngoài việc huấn luyện trực tiếp cho các Chủ doanh nghiệp, TheO Vũ Bá
            Thế luôn dành thời gian đi chia sẻ cho các cộng đồng, nhất là lao
            động trẻ, giúp họ nâng cao hiệu suất lao động và cân bằng cuộc sống.
            Với quan điểm “lấy thành thành công của người được huấn luyện, đào
            tạo làm thước đo giá trị cho chính mình", Coach TheO không ngừng
            giỏi lên mỗi ngày để giúp được ngày càng nhiều người thành công.
          </p>
          <p>
            Mục tiêu là giúp cho 100,000 người tăng thu nhập và cải thiện cuộc
            sống thông qua tiếp cận các công cụ để thay đổi tích cực về tư duy
            và có những thói quen tốt, Coach TheO luôn tạo ra những khóa kỹ
            năng, các chương trình đào tạo dễ học, dễ ứng dụng để đưa vào các
            doanh nghiệp, cộng đồng. Các khóa như DISC & Motivators, Hỏi Để
            Thành Công - Hỏi Để Giàu, Xây dựng NHÂN DẠNG ... đã giúp cho hàng
            ngàn bạn trẻ nâng cao thu nhập và tạo nên cuộc sống cân bằng.
          </p>
        </div>
      </div>
      <div className="slider-item">
        <div className="slider-image">
          <img src="/images/slider-5.jpg" alt="" />
        </div>
        <div className="slider-content">
          <h3>5. GIÚP BẠN CÓ THÊM NHỮNG TRẢI NGHIỆM THÚ VỊ</h3>
          <p>
            Là người mê những trải nghiệm, Coach TheO luôn tổ chức cho bản thân,
            khách hàng hoặc bạn bè những chuyến đi phượt, dã ngoại, leo núi, đạp
            xe hoặc trò chơi vận động. Cùng với thói quen lập kế hoạch cứ mỗi 90
            ngày cho doanh nghiệp là thói quen mỗi quý sẽ dành ít nhất 1 tuần để
            ngưng làm việc, dành thời gian cho việc tận hưởng phong cách sống,
            niềm vui và những trải nghiệm mới mẻ.
          </p>
          <p>
            Đôi khi trong quá trình đồng hành cùng doanh nghiệp, bạn sẽ có thêm
            nhiều sở thích mới, niềm vui mới hoặc đơn giản là khiến cho cuộc
            sống của bạn có thêm nhiều màu sắc…
          </p>
        </div>
      </div>
    </Slider>
  );
};

export default Slide;
