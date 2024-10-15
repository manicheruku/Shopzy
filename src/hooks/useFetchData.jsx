import React, { useEffect, useState } from "react";
import axios from "axios";

function useFetchData(url) {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState("");

  const getData = async () => {
    setIsLoaded(true);
    try {
      let res = await fetch(url);
      let result = await res.json();
      setIsLoaded(false);
      setData(result);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    getData();
  }, [url]);

  return { data, isLoaded, error };
}

export default useFetchData;
