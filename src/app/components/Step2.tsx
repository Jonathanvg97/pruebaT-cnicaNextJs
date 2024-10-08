import { useState } from "react";
import { useFormContext } from "../context/useFormContext";
import useFetchCategories from "../hooks/useFetchCategories";
import ButtonStep from "../UI/ButtonStep";

const Step2 = ({
  nextStep,
  prevStep,
}: {
  nextStep: () => void;
  prevStep: () => void;
}) => {
  const { formData, setFormData } = useFormContext();
  const { categories, error, loading } = useFetchCategories();

  const [errors, setErrors] = useState<{
    price?: string;
    categoryId?: string;
    imageUrl?: string;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "categoryId") {
      setFormData({
        ...formData,
        categoryId: Number(value),
      });
    } else if (name === "imageUrl") {
      setFormData({
        ...formData,
        images: [value.trim()], // Trim spaces before setting the URL
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    // Limpiar el error cuando el usuario empieza a escribir
    setErrors({ ...errors, [name]: undefined });
  };

  const handleNextStep = () => {
    const newErrors: {
      price?: string;
      categoryId?: string;
      imageUrl?: string;
    } = {};

    // Validaciones
    if (!formData.price || formData.price <= 0) {
      newErrors.price = "Price must be greater than 0.";
    }
    if (!formData.categoryId || formData.categoryId === 0) {
      newErrors.categoryId = "Please select a category.";
    }
    if (
      !formData.images[0] ||
      !/^https?:\/\/.*\.(jpg|jpeg|png|gif)$/i.test(formData.images[0])
    ) {
      newErrors.imageUrl = "Please enter a valid image URL.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Establecer los errores si hay alguno
    } else {
      nextStep(); // Pasar al siguiente paso si todo es correcto
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">
        Step 2: Additional Details
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-medium">Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Category</label>
        {loading ? (
          <p>Loading categories...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <select
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value={0}>Select Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        )}
        {errors.categoryId && (
          <p className="text-red-500 text-sm">{errors.categoryId}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Image URL</label>
        <input
          type="text"
          name="imageUrl"
          value={formData.images[0] || ""}
          onChange={handleChange}
          placeholder="https://placeimg.com/640/480/any"
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.imageUrl && (
          <p className="text-red-500 text-sm">{errors.imageUrl}</p>
        )}
      </div>

      <div className="flex justify-between">
        <ButtonStep onClick={prevStep} label="Back" />
        <ButtonStep onClick={handleNextStep} label="Next" isNext={true} />
      </div>
    </div>
  );
};

export default Step2;
