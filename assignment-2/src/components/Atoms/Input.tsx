type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, onChange }: InputProps) => {
  return (
    <>
      <input
        className="bg-black text-white block mb-15 text-3xl px-4 py-3 rounded-[5px]"
        type="text"
        placeholder="Enter a number "
        value={value}
        onChange={onChange}
        autoFocus
      />
    </>
  );
};

export default Input;
