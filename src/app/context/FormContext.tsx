import { createContext } from "react";
import { FormContextType, FormData } from "../interfaces/FormInterfaces";

// Valores por defecto del formulario
/**
 * ${1:Description placeholder}
 *
 * @type {FormData}
 */
export const defaultFormData: FormData = {
  title: "",
  description: "",
  price: 0,
  categoryId: 0,
  images: [''],
};

// Creación del contexto
/**
 * ${1:Description placeholder}
 *
 * @type {${2:*}}
 */
export const FormContext = createContext<FormContextType | undefined>(
  undefined
);
