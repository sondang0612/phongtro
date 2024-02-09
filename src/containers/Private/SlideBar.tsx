import React from 'react';
import { useDispatch } from 'react-redux';
import useCurrentUser from 'src/react-query/useCurrentUser';
import * as actions from '../../store/actions/auth';
import { Link, useLocation } from 'react-router-dom';
import { paths } from 'src/utils/constants';
import icons from 'src/utils/icons';

const { AiOutlineLogout, ImPencil2, MdOutlineLibraryBooks } = icons;
const SlideBar = () => {
  const { data: user } = useCurrentUser();
  const location = useLocation();
  const finalPath = location.pathname.split('/')[2];
  const dispatch = useDispatch();
  return (
    <div className="w-[256px] flex-none">
      <div className="p-[20px]">
        <div className="flex flex-row gap-[12px] items-center">
          <img
            src="/default-user.png"
            alt="default-user"
            className="size-[50px] rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-[16.8px] font-bold">{user?.name}</span>
            <span className="text-[12.6px] text-[#555]">{user?.phone}</span>
          </div>
        </div>
        <div className="flex flex-row gap-1 items-center mt-[10px]">
          <p className="text-[14px]">Mã thành viên:</p>
          <p className="text-[14px] font-bold">{user?.id.slice(0, 6)}...</p>
        </div>
        <Link
          to={paths.CREATE_POST}
          className="text-[12.25px] text-white bg-[#dc3545] px-[7px] py-[3.5px] rounded-sm hover:bg-[#c82333]"
        >
          Đăng tin
        </Link>
        <div className="mt-[20px]">
          <Link to={paths.MANAGE_POSTS}>
            <div
              className={`flex flex-row items-center gap-[5px] py-[8px] text-[14px] text-[#333] cursor-pointer hover:text-[#000] hover:bg-[#f1f1f1] ${
                finalPath === paths.MANAGE_POSTS && 'font-bold'
              }`}
            >
              <MdOutlineLibraryBooks />
              Quản lý tin đăng
            </div>
          </Link>
          {/* <Link to={paths.UPDATE_USER}>
            <div
              className={`flex flex-row items-center gap-[5px] py-[8px] text-[14px] text-[#333] cursor-pointer hover:text-[#000] hover:bg-[#f1f1f1] ${
                finalPath === paths.UPDATE_USER && 'font-bold'
              }`}
            >
              <ImPencil2 />
              Sửa thông tin cá nhân
            </div>
          </Link> */}
          <div
            className="flex flex-row items-center gap-[5px] py-[8px] text-[14px] text-[#333] cursor-pointer hover:text-[#000] hover:bg-[#f1f1f1]"
            onClick={() => dispatch(actions.logout())}
          >
            <AiOutlineLogout />
            Thoát
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideBar;
