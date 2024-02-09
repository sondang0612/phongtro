import React from 'react';
type Props = {
  IconBefore?: any;
  IconAfter?: any;
  text?: string;
  bold?: boolean;
};
const SearchItem = (props: Props) => {
  const { IconAfter, IconBefore, text, bold = false } = props;
  return (
    <div className="bg-white py-2 px-4 w-full rounded-md text-gray-400 text-[13.3px] flex flex-row items-center justify-between cursor-pointer">
      <div className="flex flex-row items-center gap-1">
        {IconBefore}
        <span
          className={`${
            bold && 'font-bold text-black'
          } w-[100px] overflow-hidden text-ellipsis whitespace-nowrap`}
        >
          {text}
        </span>
      </div>
      {IconAfter}
    </div>
  );
};

export default React.memo(SearchItem);
