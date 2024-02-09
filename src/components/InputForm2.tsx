import React from 'react';
type Props = {
  label: string;
  value: string;
  setValue?: any;
  type?: string;
  readOnly?: boolean;
  area?: boolean;
  inputRounded?: string;
  inputRight?: any;
};
const InputForm2 = (props: Props) => {
  const {
    label,
    value,
    setValue,
    type,
    readOnly = false,
    area = false,
    inputRounded,
    inputRight,
  } = props;
  return (
    <div className="flex flex-col gap-[2px]">
      <label className="text-[14] font-bold mb-[5px]">{label}</label>
      {area ? (
        <textarea
          readOnly={readOnly}
          className={`border border-gray-200 outline-none rounded-md p-2 w-full ${
            readOnly && 'bg-gray-100'
          }`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ height: 250 }}
        />
      ) : (
        <div className="flex flex-row">
          <input
            readOnly={readOnly}
            type={type || 'text'}
            className={`border border-gray-200 outline-none p-2 w-full ${
              readOnly && 'bg-gray-100'
            } ${inputRounded ? inputRounded : 'rounded-md '}`}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          {inputRight && inputRight}
        </div>
      )}
    </div>
  );
};

export default React.memo(InputForm2);
