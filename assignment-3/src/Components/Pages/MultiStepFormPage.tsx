import MultiStepFormTemplate from "../Templates/MultiStepFormTemplate";
import { useState, ChangeEvent } from "react";

const steps = ["Personal Info", "Contact Details"];

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

const MultiStepFormPage = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
      if (step === steps.length) {
        setIsSubmitted(true);
      } else {
        setStep((prev) => prev + 1);
      }
    }
  };

  const handleBack = () => setStep((prev) => prev - 1);

  if (isSubmitted) {
    return (
      <div className="max-w-xl mx-auto p-6 text-center border rounded-md shadow bg-green-50 mt-10">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Form Submitted Successfully!
        </h2>
        <p className="text-green-600">
          Thank you for providing your information.
        </p>
      </div>
    );
  }

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
