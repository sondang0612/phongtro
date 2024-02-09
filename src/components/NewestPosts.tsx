import { useNavigate } from 'react-router-dom';
import useNewestPosts from 'src/react-query/useNewestPosts';

const NewestPosts = () => {
  const { data: posts } = useNewestPosts();
  const navigate = useNavigate();
  return (
    <div className="rounded-md bg-white w-full p-[20px] flex gap-[10px] flex-col">
      <span className="font-bold text-[18.2px] text-[#333]">Tin mới đăng</span>
      {posts?.map((post, index) => (
        <div
          key={index}
          onClick={() => navigate(`/chi-tiet/${post.id}`)}
          className={`flex flex-col items-center lg:flex-row py-[10px] gap-[15px] border-t-[#eee] border-solid ${
            index === 0 ? 'border-t-[0px]' : 'border-t-[1px]'
          }`}
        >
          <img
            src={
              post?.images?.image ? JSON.parse(`${post?.images?.image}`)[0] : ''
            }
            alt="post"
            className="size-[65px] cursor-pointer rounded-md"
          />

          <div className="w-4/5">
            <p className="text-[14px] text-[#1266dd] leading-[18.2px] cursor-pointer limit-text-title-length">
              {post.title}
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-between mt-[10px]">
              <p className="text-[14px] text-[#16c784] font-bold">
                {post.attributes?.price}
              </p>
              {/* <p className="text-[12.6px] text-[#aaa]">14 giờ trước</p> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewestPosts;
