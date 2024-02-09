import React from 'react';
import { Link } from 'react-router-dom';
import { Post as PostType } from 'src/types';
import icons from 'src/utils/icons';
const { GrStar, BsBookmarkStarFill, RiHeartLine, RiHeartFill } = icons;
type Props = {
  post: PostType;
  index: number;
};
const Post = (props: Props) => {
  const { post, index } = props;
  const [isOverHeart, setIsOverHeart] = React.useState(false);
  const postImages = post?.images?.image
    ? JSON.parse(`${post?.images?.image}`)
    : '';
  const linkTo = `/chi-tiet/${post.id}`;
  return (
    <div
      className={`w-full md:flex py-[15px] gap-[15px] border border-l-0 border-r-0 ${
        index !== 0 && 'border-t-0'
      }`}
    >
      <Link to={linkTo} className="flex w-full md:w-[40%] relative">
        <img
          src={postImages[0]}
          alt="post"
          className="w-full h-[240px] object-cover cursor-pointer rounded-md"
        />
        <span className="z-10 absolute bottom-[8px] left-[5px] bg-modalOverlay text-white rounded-md px-[5px] py-[3px] text-[12.6px]">
          {postImages.length || 0} ảnh
        </span>
        <span
          className="text-white absolute right-[5px] bottom-[8px] z-10"
          onMouseEnter={() => setIsOverHeart(true)}
          onMouseLeave={() => setIsOverHeart(false)}
        >
          {isOverHeart ? (
            <RiHeartFill size={24} color="red" />
          ) : (
            <RiHeartLine size={24} />
          )}
        </span>
      </Link>
      <div className="w-full md:w-[60%]">
        <div className="flex justify-between gap-4 w-full items-center">
          <div className="text-red-600 font-bold text-[14px] hover:underline">
            <GrStar className="star-item" size={18} color="yellow" />
            <GrStar className="star-item" size={18} color="yellow" />
            <GrStar className="star-item" size={18} color="yellow" />
            <GrStar className="star-item" size={18} color="yellow" />
            <GrStar className="star-item" size={18} color="yellow" />
            <Link to={linkTo} className="limit-text-title-length">
              {post.title}
            </Link>
          </div>
          <div className="w-[10%] flex justify-end">
            <BsBookmarkStarFill size={24} color="orange" />
          </div>
        </div>

        <div className="items-center gap-[20px] flex flex-col md:flex-row text-ellipsis whitespace-nowrap overflow-hidden mt-[10px]">
          <span className="text-[#16c784] font-bold text-[16.8px]">
            {post.attributes?.price}
          </span>
          <span className="text-[14px] text-[#333]">
            {post.attributes.acreage.replace('m2', '')}m²
          </span>
          <span className="text-[14px] text-[#333] ">{post.address}</span>
        </div>
        <div className="text-[14px] text-[#8a8d91] mt-[20px] limit-text-length">
          {post.description}
        </div>
        <div className="mt-[10px] flex flex-col md:flex-row justify-between items-center">
          <div className="flex md:flex-row gap-[5px] items-center">
            <img
              src="https://phongtro123.com/images/default-user.png"
              alt="avatar"
              className="size-[30px] rounded-full"
            />
            <p className="text-[14px] text-[#8a8d91]">{post.user?.name}</p>
          </div>
          <div className="flex gap-[5px] flex-col md:flex-row">
            <button
              type="button"
              className="bg-[#1266dd] text-white px-[7px] py-[3px] rounded-md text-[14px]"
            >
              Gọi {post.user?.phone}
            </button>
            <button
              type="button"
              className="border-[#1266dd] border text-[#1266dd] px-[7px] py-[3px] rounded-md text-[14px] hover:text-white hover:bg-[#1266dd]"
            >
              Nhắn Zalo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Post);
