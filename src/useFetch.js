import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          setData(json.products);
          console.log(json);
        })
        .catch((error) => alert(error));
    };

    fetchData();
  }, [url]);

  return { data, error };
};

export default useFetch;
