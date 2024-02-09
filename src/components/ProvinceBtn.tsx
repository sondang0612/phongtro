import React from 'react';
type Props = {
  name: string;
  image: string;
};
const ProvinceBtn = (props: Props) => {
  const { image, name } = props;
  return (
    <div className="cursor-pointer bg-white rounded-md shadow-md hover:text-red-500">
      <img
        src={image}
        alt={name}
        className="w-[220px] h-[110px] object-cover rounded-md"
      />
      <p className="px-[10px] py-[12px] text-[14px] text-[#1266dd] font-bold text-center ">
        {name}
      </p>
    </div>
  );
};

export default ProvinceBtn;
