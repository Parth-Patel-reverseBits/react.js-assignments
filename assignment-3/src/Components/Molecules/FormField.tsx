import Input from "../Atoms/Input";
import Label from "../Atoms/Label";
import ErrorMessage from "../Atoms/ErrorMessage";
import HelperText from "../Atoms/HelperText";

interface FormField {
  label: string;
  name: string;
  value: string;
  type?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  helperText?: string;
  options?: string[]; // if this is for select fields or radio buttons
  placeholder: string;
  onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
}

const FormField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  error,
  helperText,
  placeholder,
  min,
  max,
}: // options = [],
FormField) => {
  return (
    <div className="w-full mt-8">
      <Label children={label} />
      <Input
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
      />
      {helperText && <HelperText text={helperText} />}
      {error && <ErrorMessage text={error} />}
    </div>
  );
};

export default FormField;
