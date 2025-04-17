import { useEffect, useState } from "react";

interface UseLocalStorageCustomHookInterface {
  todos: Array<string>;
  insertTodoInLocalStorage: (todo: string) => void;
}

const useLocalStorage = (): UseLocalStorageCustomHookInterface => {
  const [todos, setTodos] = useState<Array<string>>([]);
  useEffect(() => {
    const localStorageTodo = localStorage.getItem("todos");
    if (localStorageTodo) {
      const parsedTodos = JSON.parse(localStorageTodo);
      if (Array.isArray(parsedTodos)) {
        setTodos(parsedTodos);
      }
    }
  }, []);

  const insertTodoInLocalStorage = (todo: string) => {
    const updatedTodos = [...todos, todo];
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };
  return {
    todos,
    insertTodoInLocalStorage,
  };
};

export default useLocalStorage;
