import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (URL) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchingData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(URL);
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchingData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [URL]);

  return { data, isLoading, isError };
};

export default useFetch;
