import { useCallback, useState } from "react";
import { fetchSingleTodo } from "./api/todos";
import Form from "./components/Molecules/Form";
import useForm from "./hooks/useForm";
import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  const { email, setEmail, setNumberDigit, numberDigit, setTodo, todo } =
    useForm();

  const onSubmitClick = useCallback(() => {
    fetchSingleTodo(Number(numberDigit)).then((response) => {
      console.log({ response });
    });
  }, [numberDigit]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangeNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberDigit(Number(e.target.value));
  };

  const onChangeTodoInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
    // console.log(todo);
  };

  const { insertTodoInLocalStorage, todos } = useLocalStorage();
  // const onSubmitTodo = useCallback(
  //   (e: React.ChangeEvent<HTMLInputElement>) => {},
  //   [todo]
  // );
  // console.log(myArray);

  const onSubmitEmailForm = () => alert(email);

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <Form
          placeholder="Enter a number"
          type="number"
          value={numberDigit}
          handleChange={onChangeNumberInput}
          onSubmitClick={onSubmitClick}
        />
      </div>
      <div className="w-full h-screen flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold mb-20">useForm</h1>
        <Form
          placeholder="Enter your email"
          type="text"
          value={email}
          handleChange={onChangeInput}
          onSubmitClick={onSubmitEmailForm}
        />
      </div>
      <div className="w-full h-screen flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold mb-20">useLocalStorageHook</h1>
        <Form
          placeholder="Enter a todo"
          type="text"
          value={todo}
          handleChange={onChangeTodoInput}
          onSubmitClick={() => {
            insertTodoInLocalStorage(todo);
            setTodo("");
          }}
          buttonValues="Add"
        />
        <div className="text-black font-bold text-2xl mt-10">Saved Notes: </div>
        {todos.map((item, index) => (
          <h3 key={index}>{item}</h3>
        ))}
      </div>
    </>
  );
};

export default App;
