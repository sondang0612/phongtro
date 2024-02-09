import type { TableProps } from 'antd';
import { Space, Table } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import useDeleteMyPost from 'src/react-query/useDeleteMyPost';
import useMyPosts from 'src/react-query/useMyPosts';
import Swal from 'sweetalert2';

interface DataType {
  key: number;
  no: number;
  title: string;
  image: string;
  address: string;
  onDelete: () => void;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'N.O',
    dataIndex: 'no',
    key: 'no',
  },
  {
    title: 'Tiêu đề',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Hình ảnh',
    dataIndex: 'image',
    key: 'image',
    render: (data) => {
      return <img src={data} alt="img" className="size-[100px] rounded-md" />;
    },
  },
  {
    title: 'Địa điểm',
    key: 'address',
    dataIndex: 'address',
  },
  {
    title: 'Tương tác',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <div className="text-red-500 cursor-pointer" onClick={record.onDelete}>
          Xóa
        </div>
      </Space>
    ),
  },
];

const ManagePosts = () => {
  const { data: posts } = useMyPosts();
  const { mutate: deletePost } = useDeleteMyPost();

  const onDelete = (postId: string) => {
    deletePost(postId);
    Swal.fire('Wow!!', 'Xóa thành công.', 'success');
  };
  const formatPosts = () => {
    return posts?.map((post, index) => ({
      key: index,
      no: index,
      title: post?.title,
      image: post?.images?.image ? JSON.parse(`${post?.images?.image}`)[0] : '',
      address: post?.address,
      onDelete: () => onDelete(post.id),
    }));
  };

  return (
    <div className="bg-white min-h-screen">
      <Table columns={columns} dataSource={formatPosts()} />
      {(!posts || posts?.length) === 0 && (
        <Link to={'/he-thong/tao-moi-bai-dang'}>
          <p className="text-[14px] text-blue-500 underline text-center mt-[40px]">
            Hãy đăng bài đầu tiên
          </p>
        </Link>
      )}
    </div>
  );
};

export default ManagePosts;
