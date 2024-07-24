"use client";

import React, { useEffect, useState } from "react";
import SeachSuggestionsResult from "./SeachSuggestionsResult";

const AutoCompleteSearch = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Array<string>>([]);
  const [showSearchResults, setShowSearchResults] = useState<boolean>(false);
  const [localCache, setLocalCache] = useState<any>({});

  useEffect(() => {
    if (searchTerm.length == 0) {
      setShowSearchResults(false);
      setSearchResults([]);
      return;
    }

    const timerId = setTimeout(() => {
      fetchSearch();
    }, 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  const fetchSearch = async () => {
    if (localCache[searchTerm]) {
      setSearchResults(localCache[searchTerm]);
      return;
    }

    const data = await fetch(
      `https://www.google.com/complete/search?client=firefox&q=${searchTerm}`
    );
    const json = await data.json();

    setLocalCache({ ...localCache, [searchTerm]: json[1] });
    setSearchResults(json[1]);
  };

  const showSuggestions = showSearchResults && searchResults.length > 1;

  return (
    <div className="w-[500px] m-auto">
      <h1 className="text-center text-xl py-4 font-bold">
        Autocomplete Seach Input
      </h1>
      <input
        type="search"
        placeholder="Type something to search..."
        className={`w-full py-2 px-4 border outline-none border-gray-400 rounded-md ${
          showSuggestions && "rounded-b-none"
        }`}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setShowSearchResults(true)}
        onBlur={() => setShowSearchResults(false)}
      />
      {showSuggestions && (
        <SeachSuggestionsResult searchResults={searchResults} />
      )}
    </div>
  );
};

export default AutoCompleteSearch;
