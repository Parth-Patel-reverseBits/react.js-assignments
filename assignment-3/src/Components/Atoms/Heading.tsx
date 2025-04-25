interface HeadingProps {
  children: React.ReactNode;
}

const Heading = ({ children }: HeadingProps) => {
  return <div className="font-bold text-2xl">{children}</div>;
};

export default Heading;
