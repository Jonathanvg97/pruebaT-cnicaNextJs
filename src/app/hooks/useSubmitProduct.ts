import { useState } from "react";
import { FormData } from "../interfaces/FormInterfaces";

// Hook personalizado para enviar productos
/**
 * ${1:Description placeholder}
 *
 * @returns {{ submitProduct: (formData: FormData, onSuccess?: () => void) => unknown; loading: any; error: any; isModalOpen: any; closeModal: () => void; successMessage: any; }\}
 */
const useSubmitProduct = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // Estado del modal
  const [successMessage, setSuccessMessage] = useState<string>(""); // Mensaje de éxito

  const submitProduct = async (formData: FormData, onSuccess?: () => void) => {
    setLoading(true);
    setError(null);

    // Obtén la URL de la API de las variables de entorno
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";

    try {
      // Validar que todas las URLs de imágenes sean válidas
      const validImage = formData.images.every((img: string) =>
        img.startsWith("http")
      );

      if (!validImage) {
        setLoading(false);
        setError("Please provide valid image URLs.");
        return;
      }

      const response = await fetch(`${apiUrl}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          images: formData.images.map((img: string) => img.trim()), // Asegurarse de que las URLs estén sin espacios
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccessMessage("Product created successfully!"); // Configurar el mensaje de éxito
        console.log("Modal should open now");
        setIsModalOpen(true); // Abrir el modal
        // Ejecutar la acción post-éxito (limpiar el formulario o redirigir)
        if (onSuccess) onSuccess();
        return data; // Devuelve los datos creados
      } else {
        setError(data.message[0] || "Error creating product");
        return null;
      }
    } catch (error) {
      console.error("Error creating product:", error);
      setError("Error creating product.");
      return null;
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSuccessMessage(""); // Limpiar el mensaje
  };

  return {
    submitProduct,
    loading,
    error,
    isModalOpen,
    closeModal,
    successMessage,
  };
};

export default useSubmitProduct;
