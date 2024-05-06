import { useState, useEffect } from "react";
import { getJWToken } from "@/lib/helpers";

export const useSearch = (query) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const performSearch = async () => {
      try {
        if (!query) {
          return; // If query is empty, exit early
        }

        const response = await fetch(
          `${process.env.API_URL}/search/photos?query=${query}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: getJWToken(),
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setResults(data.results);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data:", error);
        setLoading(false);
      }
    };

    performSearch(); // Call performSearch initially
  }, [query]); // Only run the effect if query changes

  return [results, loading, error];
};
