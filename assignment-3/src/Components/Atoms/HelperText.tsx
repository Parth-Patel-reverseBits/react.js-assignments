interface HelperText {
  text: string;
}

const HelperText = ({ text }: HelperText) => {
  return <p className="text-gray-500 text-sm mt-1">{text}</p>;
};

export default HelperText;
