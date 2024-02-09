import React from 'react';

const ContactUs = () => {
  return (
    <div className="shadow-md rounded-md mt-[30px] w-full">
      <div className=" w-full">
        <div className="bg-white flex p-[30px] border-dashed  border-[7px] border-[#e8eefc] flex-col">
          <div className="flex items-center flex-col">
            <img src="/support-bg.jpg" alt="support-bg" className="h-[150px]" />
            <p className="mt-[30px] mb-[20px] text-[16.8px] text-[#233762]">
              Liên hệ với chúng tôi nếu bạn cần hỗ trợ:
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between px-[40px]">
            <div className="flex flex-col items-center justify-center">
              <p className="font-bold text-[14px] text-[#f60]">
                HỖ TRỢ ĐĂNG TIN
              </p>
              <p className="text-[18.2px] text-[#233762] font-bold mt-[5px]">
                Điện thoại: 0354335099
              </p>
              <p className="text-[18.2px] text-[#233762] font-bold">
                Zalo: 0354335099
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-bold text-[14px] text-[#f60]">
                HỖ TRỢ ĐĂNG TIN
              </p>
              <p className="text-[18.2px] text-[#233762] font-bold mt-[5px]">
                Điện thoại: 0354335099
              </p>
              <p className="text-[18.2px] text-[#233762] font-bold">
                Zalo: 0354335099
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-bold text-[14px] text-[#f60]">
                HỖ TRỢ ĐĂNG TIN
              </p>
              <p className="text-[18.2px] text-[#233762] font-bold mt-[5px]">
                Điện thoại: 0354335099
              </p>
              <p className="text-[18.2px] text-[#233762] font-bold">
                Zalo: 0354335099
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-bold text-[14px] text-[#f60]">
                PHẢN ÁNH/KHIẾU NẠI
              </p>
              <p className="text-[18.2px] text-[#233762] font-bold mt-[5px]">
                Điện thoại: 0354335099
              </p>
              <p className="text-[18.2px] text-[#233762] font-bold">
                Zalo: 0354335099
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center mt-[20px]">
            <button
              type="button"
              className="rounded-md text-white border border-[#3961fb] bg-[#3961fb] py-[10px] px-[30px] text-[14px] font-bold mt-[20px]"
            >
              Gửi liên hệ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
