// src/components/MultiStepForm.tsx
"use client";

import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { useFormContext } from "../context/useFormContext";

/**
 * ${1:Description placeholder}
 *
 * @returns {${2:*}}
 */
const MultiStepForm = () => {
  //hooks
  const { resetForm } = useFormContext();
  //Local state
  const [currentStep, setCurrentStep] = useState(1);

  //functions
  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  // Define la función resetForm
  const handleResetForm = () => {
    resetForm();
    setCurrentStep(1); // Resetea al primer paso, si es necesario
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-sky-50 p-6 shadow-md rounded-lg">
      {currentStep === 1 && <Step1 nextStep={nextStep} />}
      {currentStep === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} />}
      {currentStep === 3 && (
        <Step3 prevStep={prevStep} resetForm={handleResetForm} />
      )}
    </div>
  );
};

export default MultiStepForm;
