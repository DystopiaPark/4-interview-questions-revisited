import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <input
      type="search"
      className="search-input"
      placeholder="search for a question"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default Search;
