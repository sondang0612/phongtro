import React from 'react';
import icons from 'src/utils/icons';
const { GrLinkPrevious } = icons;
type Props = {
  modalContent: {
    title: string;
    data?: any[];
    initialItem?: any;
    onItemPress?: (item: any) => void;
  };
  itemType: 'card' | 'default';
  setIsShowModal?: any;
};
const Modal = (props: Props) => {
  const { modalContent, setIsShowModal, itemType } = props;
  const [selectedItem, setSelectedItems] = React.useState<any | undefined>(
    modalContent.initialItem
  );

  const handleSetItem = (item: any) => {
    setSelectedItems(item);
    modalContent.onItemPress && modalContent.onItemPress(item);
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-modalOverlay z-[10000] flex items-center justify-center"
      onClick={(e) => {
        e.stopPropagation();
        setIsShowModal(false);
      }}
    >
      <div
        className="bg-white rounded-md w-[650px] min-h-[440px]"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="h-[45px] px-4 flex items-center justify-center border-b border-gray-100 relative">
          <span
            className="absolute z-[10000px] left-[10px] cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setIsShowModal(false);
            }}
          >
            <GrLinkPrevious size={24} color="#333" />
          </span>
          <span className="text-[14px] text-[#333] font-bold">
            {modalContent.title}
          </span>
        </div>
        <div
          className={`px-[25px] py-[10px] ${
            itemType === 'card' && 'flex flex-row flex-wrap gap-[8px] mt-[10px]'
          }`}
        >
          {modalContent.data?.map((item) =>
            itemType === 'default' ? (
              <div
                key={item.code}
                onClick={() => handleSetItem(item)}
                className={`cursor-pointer text-[15.2px] py-[12px] px-[10px] border-b border-b-[#ddd] hover:text-[#007aff] ${
                  selectedItem?.code === item.code
                    ? 'text-[#007aff]'
                    : 'text-[#333]'
                }`}
              >
                {item.value}
              </div>
            ) : (
              <div
                key={item.code}
                onClick={() => handleSetItem(item)}
                className={`cursor-pointer px-[20px] py-[5px] rounded-md text-[14px] ${
                  selectedItem?.code !== item.code
                    ? 'text-[#333] bg-[#f1f1f1]'
                    : 'bg-[#007aff] text-white'
                }`}
              >
                {item.value}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
