import React from 'react';
type Props = {
  selected?: boolean;
  value: number | any;
  onClick: any;
};
const PageNumber = (props: Props) => {
  const { selected = false, value, onClick } = props;
  return (
    <div
      className={`px-[18px] py-[15px] rounded-md text-[14px] ${
        selected
          ? 'bg-[#e13427] text-white'
          : 'hover:bg-[#ddd] bg-white cursor-pointer'
      }`}
      onClick={onClick}
    >
      {typeof value === 'number' ? value + 1 : value}
    </div>
  );
};

export default React.memo(PageNumber);
