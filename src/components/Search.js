import React, { useState } from "react";

function Search({ onSearchSubmit }) {
  const [searchBar, setSearchBar] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");

    onSearchSubmit(searchBar)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchBar}
        onChange={(e) => setSearchBar(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
