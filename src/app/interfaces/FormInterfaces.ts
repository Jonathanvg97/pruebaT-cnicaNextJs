// Definir la estructura de los datos del formulario
/**
 * ${1:Description placeholder}
 *
 * @export
 * @interface FormData
 * @typedef {FormData}
 */
export interface FormData {
  /**
 * ${1:Description placeholder}
 *
 * @type {string}
 */
title: string;
  /**
 * ${1:Description placeholder}
 *
 * @type {string}
 */
description: string;
  /**
 * ${1:Description placeholder}
 *
 * @type {number}
 */
price: number;
  /**
 * ${1:Description placeholder}
 *
 * @type {number}
 */
categoryId: number;
  /**
 * ${1:Description placeholder}
 *
 * @type {string[]}
 */
images: string[];
}

// Definir el tipo para el contexto
/**
 * ${1:Description placeholder}
 *
 * @export
 * @interface FormContextType
 * @typedef {FormContextType}
 */
export interface FormContextType {
  /**
 * ${1:Description placeholder}
 *
 * @type {FormData}
 */
formData: FormData;
  /**
 * ${1:Description placeholder}
 *
 * @type {React.Dispatch<React.SetStateAction<FormData>>}
 */
setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  /**
 * ${1:Description placeholder}
 *
 * @type {() => void}
 */
resetForm: () => void;
}
