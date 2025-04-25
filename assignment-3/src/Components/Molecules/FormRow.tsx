import React from "react";

interface FormRowPorps {
  children: React.ReactNode;
}

const FormRow = ({ children }: FormRowPorps) => {
  return <div className="flex flex-col md:flex-row gap-4 ">{children}</div>;
};

export default FormRow;
