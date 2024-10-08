import { useState } from "react";
import { useFormContext } from "../context/useFormContext";
import ButtonStep from "../UI/ButtonStep";

/**
 * ${1:Description placeholder}
 *
 * @param {{ nextStep: () => void }} param0
 * @param {() => void} param0.nextStep
 * @returns {void; \}) => any\}
 */
const Step1 = ({ nextStep }: { nextStep: () => void }) => {
  const { formData, setFormData } = useFormContext();

  const [errors, setErrors] = useState<{
    title?: string;
    description?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Actualiza los datos del formulario
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    // Limpiar el error cuando el usuario empieza a escribir
    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const handleNextStep = () => {
    const newErrors: { title?: string; description?: string } = {};

    // Validaciones
    if (!formData.title || formData.title.length < 3) {
      newErrors.title = "Product Name must be at least 3 characters.";
    }
    if (!formData.description || formData.description.length < 10) {
      newErrors.description = "Description must be at least 10 characters.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Establecer los errores si hay alguno
    } else {
      nextStep(); // Pasar al siguiente paso si todo es correcto
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Step 1: Basic Information</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium">Product Name</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Description</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description}</p>
        )}
      </div>

      <ButtonStep onClick={handleNextStep} label="Next" isNext={true} />
    </div>
  );
};

export default Step1;
