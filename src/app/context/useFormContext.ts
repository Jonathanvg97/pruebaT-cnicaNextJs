import { useContext } from "react";
import { FormContext } from "./FormContext";

// Hook personalizado para acceder al contexto
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
