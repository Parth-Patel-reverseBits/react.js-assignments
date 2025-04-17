interface LabelProps {
  label: string | undefined;
}

const Label = ({ label }: LabelProps) => {
  return <div className="text-2xl mb-5">{label}</div>;
};

export default Label;
