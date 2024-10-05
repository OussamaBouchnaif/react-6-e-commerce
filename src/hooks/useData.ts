import { useEffect, useState } from "react";


interface UseDataResponse<T> {
  data: T | null;
  error: string;
  loading: boolean;
}


const useData = <T,>(url: string): UseDataResponse<T[]> => {
  const [data, setData] = useState<T[] | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) {
      setError("URL is required");
      setLoading(false);
      return;
    }

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  return { data, error, loading };
};

export default useData;
