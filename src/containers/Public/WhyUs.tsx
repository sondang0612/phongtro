import React from 'react';
import { Link } from 'react-router-dom';
import icons from 'src/utils/icons';
const { GrStar } = icons;
const WhyUs = () => {
  const scrollToTop = () => {
    window && window.scrollTo({ behavior: 'smooth', top: 0 });
  };

  return (
    <div className="w-3/4 mb-[20px] shadow-md rounded-md mt-[30px]">
      <div className=" w-full">
        <div className="bg-white pt-[40px] pb-[60px] px-[100px] rounded-md items-center flex flex-col">
          <div className="text-[#333] text-[18.2px] font-bold">
            Tại sao lại chọn PhongTro123.com?
          </div>
          <div className="my-[14px] text-center text-[14px] text-[#333]">
            Chúng tôi biết bạn có rất nhiều lựa chọn, nhưng Phongtro123.com tự
            hào là trang web đứng top google về các từ khóa:&nbsp;
            <Link
              className="text-[14px] font-bold text-[#1266dd]"
              to={'/cho-thue-phong-tro?categoryCode=CTPT&page=0'}
              onClick={scrollToTop}
            >
              cho thuê phòng trọ
            </Link>
            &nbsp;,
            <Link
              className="text-[14px] font-bold text-[#1266dd]"
              to={'/cho-thue-can-ho?categoryCode=CTCH&page=0'}
              onClick={scrollToTop}
            >
              cho thuê căn hộ
            </Link>
            &nbsp;,
            <Link
              className="text-[14px] font-bold text-[#1266dd]"
              to={'/cho-thue-mat-bang?categoryCode=CTMB&page=0'}
              onClick={scrollToTop}
            >
              cho thuê mặt bằng
            </Link>
            &nbsp;,
            <Link
              className="text-[14px] font-bold text-[#1266dd]"
              to={'/nha-cho-thue?categoryCode=NCT&page=0'}
              onClick={scrollToTop}
            >
              nhà cho thuê
            </Link>
            .Vì vậy tin của bạn đăng trên website sẽ tiếp cận được với nhiều
            khách hàng hơn, do đó giao dịch nhanh hơn, tiết kiệm chi phí hơn
          </div>
          <div className="flex flex-row justify-between px-[40px]">
            <div className="flex flex-col items-center justify-center">
              <p className="text-[21px] font-bold text-[#333]">116.998+</p>
              <p className="text-[14px] text-[#333]">Thành viên</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-[21px] font-bold text-[#333]">103.348+</p>
              <p className="text-[14px] text-[#333]">Tin đăng</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-[21px] font-bold text-[#333]">300.000+</p>
              <p className="text-[14px] text-[#333]">Lượt truy cập/tháng</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-[21px] font-bold text-[#333]">2.500.000+</p>
              <p className="text-[14px] text-[#333]">Lượt xem/tháng</p>
            </div>
          </div>
          <div className="text-[#333] text-[18.2px] mt-[30px] font-bold">
            Chi phí thấp, hiệu quả tối đa
          </div>
          <div className="flex  gap-1 my-[5px]">
            <GrStar className="star-item" size={24} color="yellow" />
            <GrStar className="star-item" size={24} color="yellow" />
            <GrStar className="star-item" size={24} color="yellow" />
            <GrStar className="star-item" size={24} color="yellow" />
            <GrStar className="star-item" size={24} color="yellow" />
          </div>
          <div className="italic text-[14px] text-[#333] text-center">
            "Trước khi biết website phongtro123, mình phải tốn nhiều công sức và
            chi phí cho việc đăng tin cho thuê: từ việc phát tờ rơi, dán giấy,
            và đăng lên các website khác nhưng hiệu quả không cao. Từ khi biết
            website phongtro123.com, mình đã thử đăng tin lên và đánh giá hiệu
            quả khá cao trong khi chi phí khá thấp, không còn tình trạng phòng
            trống kéo dài."
          </div>
          <div className="text-[#333] text-[14px] mb-[5px] mt-[10px]">
            Anh Khánh (chủ hệ thống phòng trọ tại Tp.HCM)
          </div>
          <div className="text-[18.2px] font-bold text-[#333] mt-[20px] mb-[10px]">
            Bạn đang có phòng trọ / căn hộ cho thuê?
          </div>
          <div className="text-[#333] text-[14px]">
            Không phải lo tìm người cho thuê, phòng trống kéo dài
          </div>
          <button
            type="button"
            className="rounded-md text-white border border-[#f73859] bg-[#f73859] py-[10px] px-[30px] text-[14px] font-bold mt-[20px]"
          >
            Đăng tin ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
