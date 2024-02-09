type Props = {
  text: string;
  textColor: string;
  bgColor: string;
  IcAfter?: any;
  fullWidth?: boolean;
  padding?: string;
  textSize?: string;
  onClick?: () => void;
};
const Button = (props: Props) => {
  const {
    bgColor,
    text,
    textColor,
    IcAfter,
    fullWidth,
    padding = 'p-2',
    textSize,
    onClick,
  } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${textSize} ${padding} ${textColor} ${
        fullWidth && 'w-full'
      } ${bgColor} outline-none rounded-md hover:underline flex items-center justify-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap`}
    >
      {text}
      <span>{IcAfter && <IcAfter />}</span>
    </button>
  );
};

export default Button;
