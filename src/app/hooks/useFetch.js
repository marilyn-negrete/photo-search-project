import { useState, useEffect } from "react";
import { getJWToken } from "../lib/helpers";

export const useFetch = (url, label) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if data is present in localStorage
        const cacheData = localStorage.getItem(label);

        if (cacheData) {
          setData(JSON.parse(cacheData));
        } else {
          const response = await fetch(url, {
            headers: {
              "Content-Type": "application/json",
              Authorization: getJWToken(),
            },
          });
          const result = await response.json();
          setData(result);
          // Store data in localStorage
          localStorage.setItem(label, JSON.stringify(result));
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return [data, error, loading];
};
