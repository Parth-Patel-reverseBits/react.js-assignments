import Button from "../Atoms/Button";
import Input from "../Atoms/Input";
import Label from "../Atoms/Label";

interface TypeProps {
  label?: string;
  type: string;
  value: string | number | undefined;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitClick: () => void;
  placeholder: string;
  buttonValues?: string;
}

const Form = ({
  type,
  value,
  handleChange,
  onSubmitClick,
  label,
  placeholder,
  buttonValues = "Submit",
}: TypeProps) => {
  // console.log(first)
  return (
    <div>
      <Label label={label} />
      <Input
        placeholder={placeholder}
        type={type}
        min={0}
        value={value}
        onChange={handleChange}
      />
      <Button onClick={onSubmitClick}>{buttonValues}</Button>
    </div>
  );
};

export default Form;
