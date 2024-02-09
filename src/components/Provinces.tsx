import React from 'react';
import { ProvinceBtn } from '.';
import { locations } from 'src/utils/constants';

const Provinces = () => {
  return (
    <div className="flex flex-row items-center gap-5 pt-[15px] pb-[20px]">
      {locations.map((location, index) => (
        <ProvinceBtn key={index} {...location} />
      ))}
    </div>
  );
};

export default Provinces;
