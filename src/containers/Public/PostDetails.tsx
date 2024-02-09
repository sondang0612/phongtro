import { Carousel } from 'antd';
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { NewestPosts, Post } from 'src/components';
import usePost from 'src/react-query/usePost';
import usePostsByCategory from 'src/react-query/usePostsByCategory';
import icons from 'src/utils/icons';
const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '320px',
  color: '#fff',
  background: '#000',
};
const {
  FaPhone,
  RiHeartLine,
  FaRegMessage,
  HiOutlineLocationMarker,
  TbReportMoney,
  FaRegClock,
  CiHashtag,
  TbChartAreaLine,
  CiFlag1,
} = icons;
const PostDetails = () => {
  const { postId } = useParams();
  const { data: post } = usePost({ postId });
  const { data: posts } = usePostsByCategory({
    categoryCode: post?.categoryCode,
  });

  const postImages = post?.images?.image
    ? JSON.parse(`${post?.images?.image}`)
    : [];
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="flex flex-row w-full gap-[20px]">
      <div className="w-[65%]">
        <Carousel style={{ width: '100%' }} autoplay infinite>
          {postImages && postImages.length !== 0 ? (
            postImages.map((image: string, index: number) => (
              <div key={index} style={contentStyle}>
                <img
                  src={image}
                  alt="post-img"
                  className="object-cover w-full h-[320px]"
                />
              </div>
            ))
          ) : (
            <div style={contentStyle} />
          )}
        </Carousel>
        <div className="bg-white p-[20px]">
          <h3 className="text-[23.8px] font-bold text-[#f60] leading-[28.5px]">
            {post?.title}
          </h3>
          <div className="flex flex-col gap-[5px]">
            <div className="flex flex-row items-center">
              <p className="text-[14px]">Chuyên mục:&nbsp;</p>
              <span className="text-[14px] text-blue-500 underline cursor-pointer hover:text-[#f60]">
                {post?.label?.value}
              </span>
            </div>
            <div className="text-[14px] text-[#333] flex flex-row gap-[5px] items-center">
              <HiOutlineLocationMarker />
              {post?.address}
            </div>
            <div className="flex flex-row items-center gap-[40px]">
              <div className="flex items-center gap-[5px] text-[21px] text-[#16c784] font-bold">
                <TbReportMoney />
                {post?.attributes.price}
              </div>
              <div className="flex items-center gap-[5px] text-[14] text-[#333]">
                <TbChartAreaLine />
                {post?.attributes.acreage}
              </div>
              <div className="flex items-center gap-[5px] text-[14] text-[#333]">
                <FaRegClock />
                {post?.attributes.published}
              </div>
              <div className="flex items-center gap-[5px] text-[14] text-[#333]">
                <CiHashtag />
                {post?.attributes.hashtag}
              </div>
            </div>
            <div className="mt-[20px]">
              <h3 className="text-[21px] font-bold">Thông tin mô tả</h3>
              {post?.description && (
                <div className="flex flex-col gap-[15px] mt-[15px]">
                  {JSON.parse(post.description).map(
                    (item: any, index: number) => (
                      <p className="text-[15.4px] text-[#333]" key={index}>
                        {item}
                      </p>
                    )
                  )}
                </div>
              )}
            </div>

            <div className="mt-[20px]">
              <h3 className="text-[21px] font-bold">Đặc điểm tin đăng</h3>
              <div className="mt-[10px]">
                <div className="flex flex-row px-[5px] py-[10px]">
                  <span className="w-1/3 text-[14px] text-[#333]">Mã tin:</span>
                  <span className="w-2/3 text-[14px] text-[#333]">
                    #{post?.attributes.hashtag}
                  </span>
                </div>
                <div className="flex flex-row px-[5px] py-[10px] bg-[#f5f5f5]">
                  <span className="w-1/3 text-[14px] text-[#333]">
                    Khu vực:
                  </span>
                  <span className="w-2/3 text-[14px] text-[#333]">
                    {post?.label?.value}
                  </span>
                </div>
                <div className="flex flex-row px-[5px] py-[10px]">
                  <span className="w-1/3 text-[14px] text-[#333]">
                    Loại tin rao:
                  </span>
                  <span className="w-2/3 text-[14px] text-[#333]">
                    {post?.overview?.type}
                  </span>
                </div>
                <div className="flex flex-row px-[5px] py-[10px] bg-[#f5f5f5]">
                  <span className="w-1/3 text-[14px] text-[#333]">
                    Đối tượng thuê:
                  </span>
                  <span className="w-2/3 text-[14px] text-[#333]">
                    {post?.overview?.target}
                  </span>
                </div>
                <div className="flex flex-row px-[5px] py-[10px]">
                  <span className="w-1/3 text-[14px] text-[#333]">Gói tin</span>
                  <span className="w-2/3 text-[14px] text-[#333]">
                    {post?.overview?.bonus}
                  </span>
                </div>
                <div className="flex flex-row px-[5px] py-[10px] bg-[#f5f5f5]">
                  <span className="w-1/3 text-[14px] text-[#333]">
                    Ngày đăng:
                  </span>
                  <span className="w-2/3 text-[14px] text-[#333]">
                    {post?.overview?.created}
                  </span>
                </div>
                <div className="flex flex-row px-[5px] py-[10px]">
                  <span className="w-1/3 text-[14px] text-[#333]">
                    Ngày hết hạn
                  </span>
                  <span className="w-2/3 text-[14px] text-[#333]">
                    {post?.overview?.expired}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-[20px]">
              <h3 className="text-[21px] font-bold">Thông tin liên hệ</h3>
              <div className="mt-[10px]">
                <div className="flex flex-row px-[5px] py-[10px]">
                  <span className="w-1/3 text-[14px] text-[#333]">
                    Liên hệ:
                  </span>
                  <span className="w-2/3 text-[14px] text-[#333]">
                    {post?.user.name}
                  </span>
                </div>
                <div className="flex flex-row px-[5px] py-[10px] bg-[#f5f5f5]">
                  <span className="w-1/3 text-[14px] text-[#333]">
                    Điện thoại:
                  </span>
                  <span className="w-2/3 text-[14px] text-[#333]">
                    {post?.user.phone}
                  </span>
                </div>
                <div className="flex flex-row px-[5px] py-[10px]">
                  <span className="w-1/3 text-[14px] text-[#333]">Zalo</span>
                  <span className="w-2/3 text-[14px] text-[#333]">
                    {post?.user?.zalo}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex my-[20px]">
              <button className="flex flex-row items-center gap-[5px] bg-white border border-blue-500 py-[5px] px-[10px] rounded-md text-blue-500 hover:underline">
                <CiFlag1 />
                Gửi phản hồi
              </button>
            </div>
          </div>
        </div>
        <div className="w-full bg-white pt-[20px] rounded-md border mt-[20px]">
          <h3 className="text-[23.8px] font-bold text-[#333] leading-[28.5px] px-[20px]">
            Có thể sẽ phù hợp với bạn
          </h3>
          <div className="flex flex-col px-[20px] mt-[10px]">
            {!posts || posts.length === 0 ? (
              <div className="h-[100px] flex items-center justify-center text-[18px] font-bold">
                Không tìm thấy bài phù hợp!!!!
              </div>
            ) : (
              <>
                {posts?.map((post, index) => (
                  <Post key={post.id} post={post} index={index} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>

      <div className="w-[35%] flex flex-col gap-[20px]">
        <div className="p-[15px] bg-[#febb02] rounded-md border border-[#febb02] flex flex-col items-center justify-center">
          <img
            src="/default-user.png"
            alt="default-user"
            className="rounded-full size-[80px]"
          />
          <h3 className="text-[21px] font-bold">{post?.user.name}</h3>
          <div className="flex flex-row items-center gap-[5px]">
            <div className="rounded-full size-[8px] bg-[#16c784]" />
            <p className="text-[#333] text-[14px]">Đang hoạt động</p>
          </div>
          <button className="gap-[5px] w-full bg-[#16c784] text-[21px] text-white font-bold py-[4px] hover:bg-[#13bb7b] mt-[10px] flex flex-row items-center justify-center">
            <FaPhone />
            {post?.user.phone}
          </button>
          <button className="rounded-md gap-[5px] w-full border border-black bg-white text-[14px] text-black py-[10px]  mt-[10px] flex flex-row items-center justify-center">
            <FaRegMessage size={20} />
            Nhắn Zalo
          </button>
          <button className="rounded-md gap-[5px] w-full border border-black bg-white text-[14px] text-black py-[8px]  mt-[10px] flex flex-row items-center justify-center">
            <RiHeartLine size={24} />
            Yêu thích
          </button>
        </div>
        <NewestPosts />
      </div>
    </div>
  );
};

export default PostDetails;
