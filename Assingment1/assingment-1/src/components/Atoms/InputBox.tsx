interface InputBoxProps {
  placeholder: string;
  border?: string;
  padding?: string;
  borderRadius?: string;
  margin?: string;
  type?: string;
}

const InputBox = ({
  placeholder,
  border,
  padding,
  borderRadius,
  margin,
  type,
}: InputBoxProps) => {
  return (
    <div>
      <input
        className={`${border} ${padding} ${borderRadius} ${margin}`}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputBox;
