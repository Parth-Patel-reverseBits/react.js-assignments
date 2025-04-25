interface Label {
  children: string;
}

const Label = ({ children }: Label) => {
  return (
    <div>
      <label className="font-medium" htmlFor="">
        {children}
        <span className="text-red-500">*</span>
      </label>
    </div>
  );
};

export default Label;
