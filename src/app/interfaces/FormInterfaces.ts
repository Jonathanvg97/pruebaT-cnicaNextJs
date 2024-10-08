// Definir la estructura de los datos del formulario
export interface FormData {
  title: string;
  description: string;
  price: number;
  categoryId: number;
  images: string[];
}

// Definir el tipo para el contexto
export interface FormContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  resetForm: () => void;
}
