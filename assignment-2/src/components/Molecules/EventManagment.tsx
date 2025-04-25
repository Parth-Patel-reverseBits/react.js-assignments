import { useEffect, useState } from "react";

const EventManagment = () => {
  const [spaceKey, setSpaceKey] = useState("bg-gray-200 text-black");
  const [enterKey, setEnterKey] = useState("bg-gray-200 text-black");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (scrollY >= 2780) {
        if (e.key === " " && e.target === document.body) {
          e.preventDefault();
          setSpaceKey("bg-black text-white");
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === " ") {
        setSpaceKey("bg-gray-200 text-black");
      }
    };

    const handleKeyPress = (e: KeyboardEvent) => {
      if (scrollY >= 2780 && e.key === "Enter") {
        setEnterKey("bg-black text-white");
        setTimeout(() => {
          setEnterKey("bg-gray-200 text-black");
        }, 300); // just to simulate key release
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [scrollY]);

  return (
    <div className="h-screen w-full" id="keyboard-event">
      <div className="text-center text-3xl font-bold pt-20">
        KeyBoard Events
      </div>
      <div className="flex mx-50 justify-center gap-20 mt-30">
        <h2 className={`${spaceKey} px-10 py-5 rounded-[3px]`}>Space key</h2>
        <h2 className={`${enterKey} px-10 py-5 rounded-[3px]`}>Enter key</h2>
      </div>
    </div>
  );
};

export default EventManagment;
