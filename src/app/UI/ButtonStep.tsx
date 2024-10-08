// src/app/components/ButtonStep.tsx
import React from "react";
import { ButtonStepProps } from "../interfaces/ButtonStepInterface";

const ButtonStep: React.FC<ButtonStepProps> = ({ onClick, label, isNext }) => {
  return (
    <button
      onClick={onClick}
      className={`mt-4 p-2 rounded font-bold ${
        isNext ? "bg-sky-700 text-white" : "bg-gray-500 text-white"
      }`}
    >
      {label}
    </button>
  );
};

export default ButtonStep;
