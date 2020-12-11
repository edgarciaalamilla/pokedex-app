import { useState } from "react";
import pokemon from "../api/pokemon";

export default () => {
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const searchAPI = async (queryTerm) => {
    try {
      const response = await pokemon.get(`pokemon/${queryTerm.toLowerCase()}`);

      setResult(response);
      setErrorMessage("");
    } catch (e) {
      setErrorMessage("Something went wrong");
    }
  };

  return [searchAPI, result, errorMessage];
};
