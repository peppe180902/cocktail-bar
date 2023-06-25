import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(url);
        setData(data.drinks);
      } catch (error) {
        console.log('sono un errore :' + error);
      }
      setIsLoading(false);
    })();
  }, [url]);

  return { data, isLoading };
};

export default useFetch;
