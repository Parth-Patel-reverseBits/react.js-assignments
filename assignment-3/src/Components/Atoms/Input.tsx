interface InputProps {
  type: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  min?: number;
  max?: number;
}

const Input = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  min,
  max,
}: InputProps) => {
  return (
    <div className="w-full">
      <input
        className="bg-black text-white p-3 rounded-[3px] mt-2 w-full"
        placeholder={placeholder}
        required
        type={type}
        name={name}
        value={min === 10 && max == 10 ? parseInt(value) : value}
        onChange={onChange}
        min={min}
        max={max}
      />
    </div>
  );
};

export default Input;
