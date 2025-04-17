import { useState } from "react";

export default function useForm() {
  const [email, setEmail] = useState<string>("");
  const [numberDigit, setNumberDigit] = useState<number>();
  const [todo, setTodo] = useState("");

  return {
    email,
    setEmail,
    numberDigit,
    setNumberDigit,
    todo,
    setTodo,
  };
}
