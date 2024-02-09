import React from 'react';
type Props = {
  label: string;
  value: string;
  setValue?: any;
  keyPayload?: string;
  type?: string;
};
const InputForm = (props: Props) => {
  const { label, value, keyPayload, setValue, type } = props;
  return (
    <div>
      <label htmlFor={keyPayload} className="text-sx">
        {label}
      </label>
      <input
        type={type || 'text'}
        id={keyPayload}
        className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
        value={value}
        onChange={(e) =>
          keyPayload &&
          setValue &&
          setValue((prev: any) => ({
            ...prev,
            [keyPayload]: e.target.value,
          }))
        }
      />
    </div>
  );
};

export default React.memo(InputForm);
