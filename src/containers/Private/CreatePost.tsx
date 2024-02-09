import { Select } from 'antd';
import React from 'react';
import { BarLoader } from 'react-spinners';
import InputForm2 from 'src/components/InputForm2';
import useCategories from 'src/react-query/useCategories';
import useCreatePost from 'src/react-query/useCreatePost';
import useCurrentUser from 'src/react-query/useCurrentUser';
import useVietNamDistrictsByProvinceId, {
  District,
} from 'src/react-query/useVietNamDistrictsByProvinceId';
import useVietNamProvinces, {
  Province,
} from 'src/react-query/useVietNamProvinces';
import { Category } from 'src/types';
import areas from 'src/utils/areas';
import { getCodes } from 'src/utils/getCodes';
import icons from 'src/utils/icons';
import prices from 'src/utils/prices';
import { uploadImages } from 'src/utils/upload';
import Swal from 'sweetalert2';
const { BsCameraFill, ImBin } = icons;

const CreatePost = () => {
  const [title, setTile] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [area, setArea] = React.useState('');
  const [gender, setGender] = React.useState('Tất cả');
  const [images, setImages] = React.useState<string[] | undefined>(undefined);

  const [selectedProvince, setSelectedProvince] = React.useState<
    Province | undefined
  >(undefined);
  const [selectedDistrict, setSelectedDistricts] = React.useState<
    District | undefined
  >(undefined);
  const [selectedCategory, setSelectedCategory] = React.useState<
    Category | undefined
  >(undefined);
  const { data: provinces } = useVietNamProvinces();
  const { data: districts } = useVietNamDistrictsByProvinceId({
    provinceId: selectedProvince?.province_id,
  });
  const { data: categories } = useCategories();

  const { data: user } = useCurrentUser();
  const { mutate: createPost, isSuccess } = useCreatePost();

  const [uploadImageLoading, setUploadImageLoading] = React.useState(false);

  const formatProvinces = () => {
    return (
      provinces?.map((item) => ({
        label: item.province_name,
        value: item.province_name,
      })) || []
    );
  };

  const formatDistricts = () => {
    return (
      districts?.map((item) => ({
        label: item.district_name,
        value: item.district_name,
      })) || []
    );
  };

  const formatCategories = () => {
    return (
      categories?.map((category) => ({
        label: category.value,
        value: category.value,
      })) || []
    );
  };

  const handleChangeFiles = async (e: any) => {
    e.stopPropagation();
    const files = e.target.files;
    setUploadImageLoading(true);
    const images = await uploadImages(files);
    setImages(images);
    setUploadImageLoading(false);
  };

  const handleDeleteImage = async (image: string) => {
    setImages((prev) => prev?.filter((item) => item !== image));
  };
  React.useEffect(() => {
    if (isSuccess) {
      Swal.fire('Happy!!', 'Tạo bài đăng thành công', 'success');
      setTile('');
      setDescription('');
      setPrice('');
      setArea('');
      setGender('Tất cả');
      setImages(undefined);
      setSelectedProvince(undefined);
      setSelectedDistricts(undefined);
      setSelectedCategory(undefined);
    }
  }, [isSuccess]);

  const handleSubmit = () => {
    const priceResult = getCodes(+price / Math.pow(10, 6), prices);
    const areaResult = getCodes(+area, areas);
    if (
      !title ||
      !description ||
      !selectedCategory ||
      !selectedProvince ||
      !priceResult ||
      !areaResult ||
      !area ||
      !gender ||
      !user?.id ||
      !price ||
      !selectedDistrict
    ) {
      Swal.fire('Oop!!', 'Vui lòng điền đủ form', 'error');
      return undefined;
    }
    const form = {
      title,
      description,
      categoryCode: selectedCategory?.code,
      province: selectedProvince?.province_name,
      price: priceResult,
      area: areaResult,
      label: `${
        categories?.filter((item) => item?.code === selectedCategory?.code)[0]
          ?.value
      } ${selectedProvince?.province_name}`,
      areaNumber: +area,
      gender,
      images,
      userId: user?.id,
      priceNumber: +price / Math.pow(10, 6),
      address: `Địa chỉ: ${selectedProvince?.province_name}, ${selectedDistrict?.district_name}`,
    };
    createPost(form);
  };

  return (
    <div className="p-[20px]">
      <h1 className="text-3xl font-medium py-4 border-b border-gray-200">
        Đăng tin mới
      </h1>
      <div className="my-[10px] pb-[100px]">
        <div className="flex justify-between">
          <div className="py-4 flex flex-col gap-4 w-[70%]">
            <div>
              <div className="flex flex-col lg:flex-row justify-between gap-[30px] mb-[20px]">
                <div className="flex-1">
                  <h3 className="text-[14] font-bold mb-[5px]">
                    Tỉnh/Thành phố
                  </h3>
                  <Select
                    defaultValue={''}
                    value={selectedProvince?.province_name || ''}
                    onSelect={(value) => {
                      if (value !== selectedProvince?.province_name) {
                        setSelectedDistricts(undefined);
                      }
                      setSelectedProvince(
                        provinces?.filter(
                          (item) => item.province_name === value
                        )[0]
                      );
                    }}
                    style={{ width: '100%' }}
                    showSearch
                    options={[
                      { label: '-- Chọn tỉnh/TP --', value: '', id: '' },
                      ...formatProvinces(),
                    ]}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-[14] font-bold mb-[5px]">Quận/Huyện</h3>
                  <Select
                    defaultValue={''}
                    value={selectedDistrict?.district_name || ''}
                    onSelect={(value) =>
                      setSelectedDistricts(
                        districts?.filter(
                          (item) => item.district_name === value
                        )[0]
                      )
                    }
                    style={{ width: '100%' }}
                    showSearch
                    options={[
                      { label: '-- Chọn Quận/Huyện --', value: '', id: '' },
                      ...formatDistricts(),
                    ]}
                  />
                </div>
              </div>
              <div>
                <InputForm2
                  label="Địa chỉ chính xác"
                  value={`${
                    selectedProvince && selectedDistrict
                      ? `${selectedProvince?.province_name}, ${selectedDistrict?.district_name}`
                      : ''
                  }`}
                  readOnly
                />
              </div>
            </div>
            <div className="mt-[30px]">
              <h3 className="text-[24.5px] font-bold">Thông tin mô tả</h3>
              <div className="mt-[20px] flex flex-col gap-[30px]">
                <div className="w-2/3">
                  <h3 className="text-[14] font-bold mb-[5px]">
                    Loại chuyên mục
                  </h3>
                  <Select
                    value={selectedCategory?.value}
                    onSelect={(value) =>
                      setSelectedCategory(
                        categories?.filter((item) => (item.value = value))[0]
                      )
                    }
                    style={{ width: '100%' }}
                    showSearch
                    options={[
                      {
                        label: '-- Chọn loại chuyên mục --',
                        value: '',
                        id: '',
                      },
                      ...formatCategories(),
                    ]}
                  />
                </div>

                <div className="w-2/3">
                  <InputForm2
                    label="Tiêu đề"
                    value={title}
                    setValue={setTile}
                  />
                </div>

                <div className="w-2/3">
                  <InputForm2
                    label="Nội dung mô tả"
                    value={description}
                    setValue={setDescription}
                    area
                  />
                </div>

                <div className="w-2/3">
                  <InputForm2
                    label="Thông tin liên hệ"
                    value={user?.name || ''}
                    readOnly
                  />
                </div>
                <div className="w-2/3">
                  <InputForm2
                    label="Điện thoại"
                    value={user?.phone || ''}
                    readOnly
                  />
                </div>
                <div className="w-2/3">
                  <InputForm2
                    label="Giá cho thuê"
                    value={price}
                    setValue={setPrice}
                    inputRounded="rounded-tl-md rounded-bl-md"
                    inputRight={
                      <span className="flex items-center justify-center px-[10px] bg-[#e9ecef] rounded-tr-md rounded-br-md">
                        đồng
                      </span>
                    }
                  />
                  <span className="text-[11.2px] text-[#6c757d]">
                    Nhập đầy đủ số, ví dụ 1 triệu thì nhập là 1000000
                  </span>
                </div>
                <div className="w-2/3">
                  <InputForm2
                    label="Diện tích"
                    value={area}
                    setValue={setArea}
                    inputRounded="rounded-tl-md rounded-bl-md"
                    inputRight={
                      <span className="flex items-center justify-center px-[10px] bg-[#e9ecef] rounded-tr-md rounded-br-md">
                        m <sup>2</sup>
                      </span>
                    }
                  />
                </div>

                <div className="w-2/3">
                  <h3 className="text-[14] font-bold mb-[5px]">
                    Đối tượng cho thuê
                  </h3>
                  <Select
                    defaultValue={'Tất cả'}
                    value={gender}
                    onSelect={(value) => setGender(value)}
                    style={{ width: '100%' }}
                    showSearch
                    options={[
                      {
                        label: '-- Tất cả --',
                        value: 'Tất cả',
                      },
                      {
                        label: 'Nam',
                        value: 'Nam',
                      },
                      {
                        label: 'Nữ',
                        value: 'Nữ',
                      },
                    ]}
                  />
                </div>

                <div>
                  <h2 className="font-bold text-xl py-4">Hình ảnh</h2>
                  <small>Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn</small>
                  <div className="w-full">
                    <label className="w-full border-2 h-[200px] my-4 gap-4 flex flex-col items-center justify-center border-gray-400 border-dashed rounded-md">
                      <BsCameraFill color="blue" size={50} />
                      Thêm ảnh
                      <input
                        type="file"
                        id="file"
                        hidden
                        multiple
                        onChange={handleChangeFiles}
                        value={''}
                      />
                    </label>
                    <div className="flex flex-row gap-4 items-center">
                      {uploadImageLoading ? (
                        <BarLoader
                          color={'red'}
                          loading={true}
                          aria-label="Loading Spinner"
                          data-testid="loader"
                        />
                      ) : (
                        images?.map((image, index) => {
                          return (
                            <div className="relative w-1/3 h-1/3" key={index}>
                              <img
                                alt={`img-${image}`}
                                src={image}
                                className="w-full h-full object-cover rounded-md"
                              />
                              <span
                                onClick={() => handleDeleteImage(image)}
                                className="absolute top-0 right-0 p-2 cursor-pointer bg-gray-300 hover:bg-gray-400 rounded-full"
                              >
                                <ImBin />
                              </span>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full bg-secondary1 text-white p-[10px] rounded-md mt-[40px]"
                  >
                    Đăng bài
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="w-[30%] h-[300px] bg-red-500">maps</div> */}
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
