import { useState, useEffect } from "react";

const useFetchData = (url, options = {}) => {
  const {
    method = "GET",
    body = null,
    headers = {
      Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
      "Content-Type": "application/json",
    },
  } = options;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url, {
        method,
        headers,
        body: method !== "GET" && body ? JSON.stringify(body) : null,
        cache: "no-store",
      });

      try {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          const text = await response.text();
          throw new TypeError(`Received non-JSON response: ${text}`);
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, body, headers, setData]);

  return { data, setData, loading, error };
};

export default useFetchData;
