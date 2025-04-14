import Button from "./components/Atoms/button";
import Model from "./components/Atoms/Model";
import Card from "./components/Molecules/Card";
import Form from "./components/Molecules/Form";

const App = () => {
  return (
    <div className="min-h-screen w-full dark:bg-black">
      <div className="mx-20">
        <h1 className="font-extrabold text-center text-3xl pt-10 dark:bg-black dark:text-white">
          Assingment - 1
        </h1>
        <Button
          buttonContent={"Button"}
          primaryBg={"dark:bg-blue-500"}
          text={"dark:text-white"}
        />
        <Button
          buttonContent={"Button"}
          primaryBg={"dark:bg-white"}
          text={"dark:text-black"}
          marginLeft={"ml-10"}
        />
        <Button
          buttonContent={"Button"}
          primaryBg={"dark:bg-red-500"}
          text={"dark:text-white"}
          marginLeft={"ml-10"}
        />
        <Button
          buttonContent={"Button"}
          primaryBg={"dark:bg-green-500"}
          text={"dark:text-black"}
          marginLeft={"ml-20"}
        />
        <div>
          <Card />
        </div>

        {/* Model  */}
        <div className="mt-5">
          <Model />
        </div>

        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;
