import { useState } from "react";

const EventManagment = () => {
  const [spaceKey, setSpaceKey] = useState<string>("bg-gray-200 text-black");
  const [enterKey, setEnterKey] = useState<string>("bg-gray-200 text-black");
  if (window.scrollY >= 2780) {
    window.addEventListener("keydown", function (e) {
      if (e.keyCode == 32 && e.target == document.body) {
        e.preventDefault();
        setSpaceKey("bg-black text-white");
      }
    });
    window.addEventListener("keyup", () => {
      setSpaceKey("bg-gray-200");
    });

    window.addEventListener("keypress", () => {
      setEnterKey("bg-black text-white");
    });
  }

  return (
    <div className="h-screen w-full">
      <div className="text-center text-3xl font-bold pt-20">
        KeyBoard Events
      </div>
      <div className="flex mx-50 justify-center gap-20 mt-30">
        <h2 className={`${spaceKey}  px-10 py-5 rounded-[3px]`}>Space key</h2>
        <h2 className={`${enterKey}  px-10 py-5 rounded-[3px]`}>
          Enter key {enterKey === "bg-gray-200 text-black"}
        </h2>
      </div>
    </div>
  );
};

export default EventManagment;
