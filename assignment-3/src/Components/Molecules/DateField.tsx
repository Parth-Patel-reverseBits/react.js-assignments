import DatePicker from "../Atoms/DatePicker";
import Label from "../Atoms/Label";

const DateField = () => {
  return (
    <div className="mt-8">
      <Label children="Date Of Birth" />
      <DatePicker />
      <p className="text-[13px] mt-2">
        You must be at least 18 years old to continue
      </p>
    </div>
  );
};

export default DateField;
