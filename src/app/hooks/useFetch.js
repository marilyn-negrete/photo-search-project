import { useState, useEffect } from "react";
import { getJWToken } from "@/lib/helpers";

export const useFetch = (url, label) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if data is present in localStorage. If no-cache label is passed, don't store in localStrorage.
        const cacheData = label === "no-cache" ? false : localStorage.getItem(label);

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
          if(response.ok) {
            setData(result);
            // Store data in localStorage
            if(label !== "no-cache" ) {
              localStorage.setItem(label, JSON.stringify(result));
            } 
          }
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, label]);

  return [data, error, loading];
};
