import Input from "../Atoms/Input";
import Button from "../Atoms/Button";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";

const Form = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const onSubmitClick = () => {
    useFetch(`https://jsonplaceholder.typicode.com/todos/${inputValue}`);
  };
  return (
    <div>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button onClick={onSubmitClick}>Submit</Button>
    </div>
  );
};

export default Form;
