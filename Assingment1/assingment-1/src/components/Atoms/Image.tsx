interface ImgeProps {
  imgSrc: string;
}

const Image = ({ imgSrc }: ImgeProps) => {
  return (
    <div className="w-[40%] ">
      <img className="w-full object-cove" src={imgSrc} alt="spider-man image" />
    </div>
  );
};

export default Image;
