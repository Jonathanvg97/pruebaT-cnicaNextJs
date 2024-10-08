"use client";
import { useState, useEffect, ReactNode } from "react";
import { FormContext, defaultFormData } from "./FormContext";
import { FormData } from "../interfaces/FormInterfaces";

// Proveedor del contexto
export const FormProvider = ({ children }: { children: ReactNode }) => {
  // Recuperar datos del localStorage al iniciar
  const [formData, setFormData] = useState<FormData>(() => {
    const savedData = localStorage.getItem("formData");
    return savedData ? JSON.parse(savedData) : defaultFormData;
  });

  // Función para restablecer el formulario
  const resetForm = () => {
    setFormData(defaultFormData); // Restablecer al valor predeterminado
    localStorage.removeItem("formData"); // Limpiar localStorage al resetear el formulario
  };

  // Guardar los datos del formulario en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  // UI
  return (
    <FormContext.Provider value={{ formData, setFormData, resetForm }}>
      {children}
    </FormContext.Provider>
  );
};
