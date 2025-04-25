interface ErrorMessage {
  text: string;
}

const ErrorMessage = ({ text }: ErrorMessage) => {
  return <p className="text-red-500 text-sm mt-1">{text}</p>;
};

export default ErrorMessage;
