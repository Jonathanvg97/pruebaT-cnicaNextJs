// src/app/components/ButtonStep.tsx
import React from "react";
import { ButtonStepProps } from "../interfaces/ButtonStepInterface";

/**
 * ${1:Description placeholder}
 *
 * @param {{ onClick: any; label: any; isNext: any; }} param0
 * @param {${2:*}} param0.onClick
 * @param {${3:*}} param0.label
 * @param {${4:*}} param0.isNext
 * @returns {${5:*}\}
 */
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
