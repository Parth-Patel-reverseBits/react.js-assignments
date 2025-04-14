import Image from "../Atoms/Image";
import Paragraph from "../Atoms/Paragraph";
import Title from "../Atoms/Title";
import Button from "../Atoms/button";

const Card = () => {
  return (
    <div className="flex w-[40%] h-[260px] mt-5 shadow-[0px_2px_40px_rgba(240,_46,_170,_0.7)]  rounded-[10px] overflow-hidden">
      <Image imgSrc="https://images.unsplash.com/photo-1534809027769-b00d750a6bac?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <div className="w-[60%] mx-10 relative">
        <Title />
        <Paragraph />
        <Button
          buttonContent="Watch"
          primaryBg="bg-blue-500"
          position="absolute"
          buttonPos="bottom-10 right-0"
          cursor="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Card;
