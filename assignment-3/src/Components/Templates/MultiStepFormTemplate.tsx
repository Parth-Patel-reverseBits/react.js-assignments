// import React from "react";
import PersonalInformationForm from "../organisms/PersonalInformationForm";
// import FormNavigation from "../organisms/FormNavigation";
// import ProgressIndicator from "../molecules/ProgressIndicator";
import React from "react";

interface MultiStepFormTemplateProps {
  step: number;
  formData: Record<string, any>; // Replace with a more specific type if possible
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: Record<string, string>; // or your custom error type
  onBack: () => void;
  onNext: () => void;
  steps: string[]; // or Array<{ label: string }> based on your UI
}

const MultiStepFormTemplate: React.FC<MultiStepFormTemplateProps> = ({
  step,
  formData,
  onChange,
  errors,
  onBack,
  onNext,
  steps,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-6 rounded-md shadow">
      {/* <ProgressIndicator steps={steps} currentStep={step} /> */}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onNext();
        }}
      >
        {step === 1 && (
          <PersonalInformationForm
            formData={formData}
            onChange={onChange}
            errors={errors}
          />
        )}

        {/* {step === 2 && (
          <ContactDetailsForm
            formData={formData}
            onChange={onChange}
            errors={errors}
          />
        )}

        <FormNavigation
          onBack={onBack}
          onNext={onNext}
          currentStep={step}
          totalSteps={steps.length}
        /> */}
      </form>
    </div>
  );
};

export default MultiStepFormTemplate;
