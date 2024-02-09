import { useSearchParams } from 'react-router-dom';
import { Pagination } from 'src/containers/Public';
import usePostsLimit from 'src/react-query/usePostsLimit';
import removeNullFromObject from 'src/utils/removeNullFromObject';
import { Post } from '.';
const ListPosts = () => {
  const [params] = useSearchParams();
  const page = params.get('page') ? Number(params.get('page')) : 0;
  const priceCode = params.get('priceCode');
  const areaCode = params.get('areaCode');
  const categoryCode = params.get('categoryCode');
  const provinceCode = params.get('provinceCode');
  const { data: postPages } = usePostsLimit({
    page,
    query: {
      priceCode,
      categoryCode,
      areaCode,
      provinceCode,
    },
  });
  const posts = postPages?.data;

  return (
    <>
      <div className="w-full bg-white pt-[20px] rounded-md border">
        <div className="flex items-center justify-between px-[20px]">
          <h4 className="text-xl font-semibold">Danh sách tin đăng</h4>
          <span>Cập nhật: 12:05 6/2/2024</span>
        </div>
        {/* <div className="flex items-center gap-2 my-2 px-[20px]">
          <span className="text-[13.3px] text-[#333]">Sắp xếp:</span>
          <Button
            textSize="text-[13.3px]"
            bgColor="bg-gray-200"
            text="Mặc định"
            textColor="#000"
            padding="px-[10px] py-[5px]"
          />
          <Button
            textSize="text-[13.3px]"
            bgColor="bg-gray-200"
            text="Mới nhất"
            textColor="#000"
            padding="px-[10px] py-[5px]"
          />
        </div> */}
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
      {posts && (
        <Pagination
          length={postPages.totalPages}
          currentPage={page}
          searchParams={removeNullFromObject({
            priceCode,
            areaCode,
            categoryCode,
            provinceCode,
          })}
        />
      )}
    </>
  );
};

export default ListPosts;
