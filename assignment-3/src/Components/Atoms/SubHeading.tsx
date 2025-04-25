interface SubHeading {
  children: string;
}

const SubHeading = ({ children }: SubHeading) => {
  return <div className="text-[#64748B]">{children}</div>;
};

export default SubHeading;
