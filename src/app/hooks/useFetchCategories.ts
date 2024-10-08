import { useEffect, useState } from "react";
import { Category } from "../interfaces/CategotyInterface";

// Hook personalizado para obtener categorías
/**
 * Hook para obtener las categorías desde la API.
 *
 * @returns {{ categories: Category[]; error: string | null; loading: boolean; }}
 */
const useFetchCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Obtén la URL de la API de las variables de entorno
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${apiUrl}/categories`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories", error);
        setError("Failed to load categories");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [apiUrl]);

  return { categories, error, loading };
};

export default useFetchCategories;
