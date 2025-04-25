import React, { useState, ChangeEvent } from "react";
import MultiStepFormTemplate from "../Templates/MultiStepFormTemplate";

const steps: string[] = ["Personal Info", "Contact Details"];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

interface FormErrors {
  [key: string]: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  dob: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

const MultiStepFormPage: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateStep = (): boolean => {
    const currentErrors: FormErrors = {};
    if (step === 1) {
      if (!formData.firstName) currentErrors.firstName = "Required";
      if (!formData.lastName) currentErrors.lastName = "Required";
      if (!formData.email) currentErrors.email = "Required";
    } else if (step === 2) {
      if (!formData.phone) currentErrors.phone = "Required";
      if (!formData.zip) currentErrors.zip = "Required";
    }
    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => setStep((prev) => prev - 1);

  return (
    <MultiStepFormTemplate
      step={step}
      formData={formData}
      onChange={handleChange}
      errors={errors}
      onBack={handleBack}
      onNext={handleNext}
      steps={steps}
    />
  );
};

export default MultiStepFormPage;
