import React from "react";

interface SeachSuggestionsResultProps {
  searchResults: Array<string>;
}

const SeachSuggestionsResult: React.FC<SeachSuggestionsResultProps> = ({
  searchResults = [],
}) => {
  return (
    <ul className="p-2 border border-gray-400 rounded-md rounded-t-none">
      {searchResults.map((search) => (
        <li key={search} className="hover:bg-gray-200 cursor-pointer px-2 py-1">
          {search}
        </li>
      ))}
    </ul>
  );
};

export default SeachSuggestionsResult;
