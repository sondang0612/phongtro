import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import useCurrentUser from 'src/react-query/useCurrentUser';
import menuManagements from 'src/utils/menuManagements';
import { Button } from '../../components';
import * as actions from '../../store/actions/auth';
import { paths } from '../../utils/constants';
import icons from '../../utils/icons';
const { AiOutlinePlusCircle, AiOutlineLogout, BsChevronDown } = icons;
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showAccountManagementModal, setShowAccountManagementModal] =
    React.useState(false);
  const { isLoggedIn } = useSelector((state: any) => state.auth);
  const { data: user } = useCurrentUser();
  const goLogin = React.useCallback(
    (isRegister?: boolean) => {
      navigate(paths.LOGIN, { state: { isRegister } });
    },
    [navigate]
  );

  return (
    <div className="w-3/4 flex items-center justify-between">
      <Link to="/">
        <img
          src={'/logowithoutbg.png'}
          alt="logo"
          className="w-[240px] h-[70px] object-contain"
        />
      </Link>
      <div className="flex items-center gap-1">
        <div className="flex items-center gap-1">
          {isLoggedIn ? (
            <>
              <Link
                to={'/he-thong/quan-ly-tin-dang'}
                className="flex flex-row gap-[10px] items-center mr-[30px]"
              >
                <img
                  src="/default-user.png"
                  alt="avatar-user"
                  className="rounded-full size-[40px]"
                />
                <div>
                  <small className="text-[16.8px] text-[#333]">
                    Xin chào&nbsp;
                    <small className="font-bold text-[16.8px] text-[#333]">
                      {user?.name}
                    </small>
                  </small>
                  <p className="text-[14px] text-[#333] text-center">
                    SĐT: {user?.phone}
                  </p>
                </div>
              </Link>
              <div className="relative">
                <Button
                  text="Quản lý tài khoản"
                  textColor="text-white"
                  bgColor="bg-secondary1"
                  IcAfter={BsChevronDown}
                  onClick={() =>
                    setShowAccountManagementModal(!showAccountManagementModal)
                  }
                />
                {showAccountManagementModal && (
                  <div className="w-[200px] px-[20px] py-[10px] absolute top-full left-0 right-0 manage-account-zIndex bg-white rounded-md shadow-md">
                    {menuManagements.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="flex flex-row gap-[8px] items-center border-b border-b-[#eee] py-[10px] text-[14px] text-[#1266dd] hover:text-[#f60] cursor-pointer"
                      >
                        {item.icon}
                        {item.text}
                      </Link>
                    ))}
                    <div
                      className="flex flex-row gap-[8px] items-center border-b border-b-[#eee] py-[10px] text-[14px] text-[#1266dd] hover:text-[#f60] cursor-pointer"
                      onClick={() => {
                        dispatch(actions.logout());
                        setShowAccountManagementModal(false);
                      }}
                    >
                      <AiOutlineLogout size={14} />
                      Thoát
                    </div>
                  </div>
                )}
              </div>
              <Button
                text="Đăng tin mới"
                textColor="text-white"
                bgColor="bg-secondary2"
                IcAfter={AiOutlinePlusCircle}
                onClick={() =>
                  navigate({ pathname: `/he-thong/${paths.CREATE_POST}` })
                }
              />
            </>
          ) : (
            <>
              <small>Phongtro123.com xin chào!!</small>
              <Button
                text="Đăng nhập"
                textColor="text-white"
                bgColor="bg-[#3961fb]"
                onClick={() => goLogin(false)}
              />
              <Button
                text="Đăng ký"
                textColor="text-white"
                bgColor="bg-[#3961fb]"
                onClick={() => goLogin(true)}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
