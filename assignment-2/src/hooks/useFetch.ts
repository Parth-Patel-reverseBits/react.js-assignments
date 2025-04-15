import axios from "axios";

async function useFetch(url: string) {
  try {
    const response = await axios.get(url);
    const data = await response.data;
    console.log(data);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Finally block");
  }
}

export default useFetch;
