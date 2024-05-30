import { useState, useEffect } from "react";

const useFetchData = (url, method = "GET", body = null) => {
  const token = localStorage.getItem("login-token");

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: method !== "GET" && body ? JSON.stringify(body) : null,
          cache: "no-store",
        });

        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const contentType = response.headers.get("content-type");
        if (!contentType.includes("application/json"))
          throw new TypeError(`Non-JSON response`);

        const result = await response.json();

        if (Array.isArray(result)) {
          const itemsWithImages = result.map(item => {
            if (item.imageBase64) {
              return {
                ...item,
                imageUrl: `data:image/jpeg;base64,${item.imageBase64}`,
              };
            }
            return item;
          });
          setData(itemsWithImages);
        } else {
          setData(result);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, body]);

  return { data, loading, error, setData };
};

export default useFetchData;
