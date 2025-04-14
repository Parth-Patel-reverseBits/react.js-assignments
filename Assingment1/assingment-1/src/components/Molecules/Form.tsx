import Label from "../Atoms/Label";
import InputBox from "../Atoms/InputBox";
const Form = () => {
  return (
    <div className="mt-5">
      <Label labelName="Email" />
      <InputBox
        placeholder="Enter your email"
        border="border-3  border-white"
        padding="p-2"
        borderRadius="rounded-lg"
        margin="mt-2 mb-2"
      />

      <Label labelName="Password" />
      <InputBox
        placeholder="Enter your password"
        border="border-3  border-white"
        padding="p-2"
        borderRadius="rounded-lg"
        margin="mt-2"
        type="password"
      />
    </div>
  );
};

export default Form;
