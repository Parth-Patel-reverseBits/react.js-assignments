import { useEffect, useState } from "react";
import Button from "../Atoms/Button";

const ResponsiveButtons = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });
  return (
    <div className="h-screen w-full ">
      <h1 className="text-4xl font-bold text-center pt-20 ">
        Responsive Buttons
      </h1>
      <div className="flex justify-center mt-30 gap-3">
        {windowWidth < 640 ? (
          <Button>{"SM"}</Button>
        ) : windowWidth < 768 ? (
          <Button>{"MD"}</Button>
        ) : windowWidth < 1024 ? (
          <Button>{"LG"}</Button>
        ) : windowWidth < 1280 ? (
          <Button>{"XL"}</Button>
        ) : windowWidth < 1536 ? (
          <Button>{"2XL"}</Button>
        ) : (
          <Button>{"2XL"}</Button>
        )}
      </div>
    </div>
  );
};

export default ResponsiveButtons;
