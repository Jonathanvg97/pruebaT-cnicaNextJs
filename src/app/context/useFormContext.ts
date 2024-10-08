import { useContext } from "react";
import { FormContext } from "./FormContext";

// Hook personalizado para acceder al contexto
/**
 * ${1:Description placeholder}
 *
 * @returns {${2:*}}
 */
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
