type InputProps = {
  value: string | readonly string[] | number | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type: string;
  min: number;
};

const Input = ({ value, onChange, placeholder, type }: InputProps) => {
  console.log(onChange);
  return (
    <>
      <input
        className="bg-black text-white block mb-15 text-3xl px-4 py-3 rounded-[5px] overflow-hidden"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoFocus
        onFocus={(e) => {
          e.preventDefault();
        }}
      />
    </>
  );
};

export default Input;
