"use client";
import { useState, ReactNode } from "react";
import { FormContext, defaultFormData } from "./FormContext";
import { FormData } from "../interfaces/FormInterfaces";

// Proveedor del contexto
export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  const resetForm = () => {
    setFormData(defaultFormData); // Restablecer al valor predeterminado
  };
  
  return (
    <FormContext.Provider value={{ formData, setFormData , resetForm}}>
      {children}
    </FormContext.Provider>
  );
};
