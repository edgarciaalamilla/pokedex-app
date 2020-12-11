import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";

const SearchScreen = () => {
  const [query, setQuery] = useState("");
  const [searchAPI, result, errorMessage] = useResult();

  return (
    <>
      <SearchBar
        pokemon={query}
        onQueryUpdate={(newQuery) => setQuery(newQuery)}
        onQuerySubmit={() => searchAPI(query)}
      />
      {result ? <Text>{result.data.name}</Text> : null}
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
