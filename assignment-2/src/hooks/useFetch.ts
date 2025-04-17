import axios from "axios";

export default async function useFetch(url: string) {
  const data: unknown[] = [];
  try {
    const response = await axios.get(url);
    const data = await response.data;
    console.log(data);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Finally block");
  }
  return { data };
}
