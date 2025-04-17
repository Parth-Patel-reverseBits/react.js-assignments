import axios from "axios";

export const fetchSingleTodo = async (id: number) => {
  try {
    const todos = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    return await todos.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
