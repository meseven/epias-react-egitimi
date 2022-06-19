import axios from "axios";
import { useEffect, useState } from "react";

const useHttp = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios(url)
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  return {
    loading,
    error,
    data,
  };
};

export default useHttp;
