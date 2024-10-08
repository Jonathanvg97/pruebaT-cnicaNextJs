import { createContext } from "react";
import { FormContextType, FormData } from "../interfaces/FormInterfaces";

// Valores por defecto del formulario
export const defaultFormData: FormData = {
  title: "",
  description: "",
  price: 0,
  categoryId: 0,
  images: [''],
};

// Creación del contexto
export const FormContext = createContext<FormContextType | undefined>(
  undefined
);
