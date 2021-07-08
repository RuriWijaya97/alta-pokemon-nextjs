import { useEffect, useState } from "react";

export default function useFetchPokemon(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    };
    if (url) {
      getData();
    }
  }, [url]);
  return {
    data,
  };
}
