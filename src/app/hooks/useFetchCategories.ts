import { useEffect, useState } from "react";
import { Category } from "../interfaces/CategotyInterface";


// Hook personalizado para obtener categorías
/**
 * ${1:Description placeholder}
 *
 * @returns {{ categories: any; error: any; loading: any; }\}
 */
const useFetchCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/categories");
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
  }, []);

  return { categories, error, loading };
};

export default useFetchCategories;
