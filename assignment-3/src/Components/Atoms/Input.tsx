interface InputProps {
  type: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Input = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
}: InputProps) => {
  return (
    <div className="w-full">
      <input
        className="bg-black text-white p-3 rounded-[3px] mt-2 w-full"
        placeholder={placeholder}
        required
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
