interface LabelProps {
  labelName: string;
}

const Label = ({ labelName }: LabelProps) => {
  return <div>{labelName}</div>;
};

export default Label;
