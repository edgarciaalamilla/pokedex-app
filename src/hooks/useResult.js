import { useState, useEffect } from "react";
import pokemon from "../api/pokemon";

export default () => {
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const searchAPI = async (queryTerm) => {
    try {
      const response = await pokemon.get(`pokemon/${queryTerm.toLowerCase()}`);

      setResult(response.data);
      setErrorMessage("");
    } catch (e) {
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchAPI("pikachu");
  }, []);

  return [searchAPI, result, errorMessage];
};
