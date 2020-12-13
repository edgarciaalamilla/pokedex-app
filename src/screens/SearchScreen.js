import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";
import ResultDetails from "../components/ResultDetails";

const SearchScreen = () => {
  const [query, setQuery] = useState("");
  const [searchAPI, result, errorMessage] = useResult();

  if (!result) return null;

  return (
    <>
      <SearchBar
        pokemon={query}
        onQueryUpdate={(newQuery) => setQuery(newQuery)}
        onQuerySubmit={() => searchAPI(query)}
      />
      <ResultDetails
        name={result.species.name}
        id={result.id}
        sprite={result.sprites.front_default}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
