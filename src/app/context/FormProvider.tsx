"use client";
import { useState, useEffect, ReactNode } from "react";
import { FormContext, defaultFormData } from "./FormContext";
import { FormData } from "../interfaces/FormInterfaces";

// Proveedor del contexto
/**
 * ${1:Description placeholder}
 *
 * @param {{ children: ReactNode }} param0
 * @param {ReactNode} param0.children
 */
export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  // Recuperar datos del localStorage al iniciar solo en el cliente
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("formData");
      if (savedData) {
        setFormData(JSON.parse(savedData));
      }
    }
  }, []);

  // Función para restablecer el formulario
  const resetForm = () => {
    setFormData(defaultFormData); // Restablecer al valor predeterminado
    if (typeof window !== "undefined") {
      localStorage.removeItem("formData"); // Limpiar localStorage al resetear el formulario
    }
  };

  // Guardar los datos del formulario en localStorage cada vez que cambian
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  }, [formData]);

  // UI
  return (
    <FormContext.Provider value={{ formData, setFormData, resetForm }}>
      {children}
    </FormContext.Provider>
  );
};
