interface ColorProps {
  buttonContent: string;
  primaryBg: string;
  text?: string;
  marginLeft?: string;
  position?: string;
  buttonPos?: string;
  cursor?: string;
}

const button = ({
  buttonContent,
  primaryBg,
  text,
  marginLeft,
  position,
  buttonPos,
  cursor,
}: ColorProps) => {
  return (
    <button
      className={`bg-black font-[Inter] ${marginLeft} text-white ${text} ${primaryBg} p-3 rounded 
      ${position} ${buttonPos} ${cursor}
      `}
    >
      {buttonContent}
    </button>
  );
};

export default button;
