"use client";
import { useFormContext } from "../context/useFormContext";
import useSubmitProduct from "../hooks/useSubmitProduct";
import { useRouter } from "next/navigation";
import Modal from "../UI/Modal";
import ButtonStep from "../UI/ButtonStep";

/**
 * ${1:Description placeholder}
 *
 * @param {{
 *   prevStep: () => void;
 *   resetForm: () => void;
 * }} param0
 * @param {() => void} param0.prevStep
 * @param {() => void} param0.resetForm
 * @returns {void; resetForm: () => void; \}) => any\}
 */
const Step3 = ({
  prevStep,
  resetForm,
}: {
  prevStep: () => void;
  resetForm: () => void;
}) => {
  //Hooks
  const { formData } = useFormContext();
  const {
    submitProduct,
    loading,
    error,
    isModalOpen,
    closeModal,
    successMessage,
  } = useSubmitProduct();
  const router = useRouter();

  // Funciones
  const handleSubmit = async () => {
    await submitProduct(formData); // Solo llamamos al submit
  };

  // Manejo del cierre del modal
  const handleCloseModal = () => {
    closeModal(); // Cierra el modal
    resetForm(); // Reinicia el formulario
    router.push("/"); // Redirige a la página de inicio
  };

  //UI
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Step 3: Confirm Product</h2>

      <div className="mb-4">
        <p>
          <strong>Name:</strong> {formData.title}
        </p>
        <p>
          <strong>Description:</strong> {formData.description}
        </p>
        <p>
          <strong>Price:</strong> ${formData.price}
        </p>
        <p>
          <strong>Category ID:</strong> {formData.categoryId}
        </p>
        <p>
          <strong>Image URL:</strong> {formData.images[0]}
        </p>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <div className="flex justify-between">
        <ButtonStep onClick={prevStep} label="Back" />

        <button
          onClick={handleSubmit}
          className={`mt-4 p-2 ${
            loading ? "bg-gray-400" : "bg-green-600"
          } text-white rounded`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Confirm & Submit"}
        </button>
      </div>
      {/* Renderizar el modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        message={successMessage}
      />
    </div>
  );
};

export default Step3;
