import icons from './icons';

const { ImPencil2, MdOutlineLibraryBooks, BiUserPin } = icons;
const menuManagements = [
  {
    text: 'Đăng tin cho thuê',
    icon: <ImPencil2 size={14} />,
    path: '/he-thong/tao-moi-bai-dang',
  },
  {
    text: 'Quản lí tin đăng',
    icon: <MdOutlineLibraryBooks size={14} />,
    path: '/he-thong/quan-ly-tin-dang',
  },
  // {
  //   text: 'Thông tin tài khoản',
  //   icon: <BiUserPin size={14} />,
  //   path: '/he-thong/thong-tin-tai-khoan',
  // },
];

export default menuManagements;
