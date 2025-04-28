import React from "react";
import Button from "../Atoms/Button";

type FormNavigationProps = {
  onBack: () => void;
  onNext: () => void;
  currentStep: number;
  totalSteps: number;
};

const FormNavigation: React.FC<FormNavigationProps> = ({
  onBack,
  onNext,
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="flex justify-between mt-6">
      {currentStep > 1 ? <Button onClick={onBack}>Back</Button> : <span />}
      <Button type="submit" onClick={onNext}>
        {currentStep === totalSteps ? "Submit" : "Next"}
      </Button>
    </div>
  );
};

export default FormNavigation;
