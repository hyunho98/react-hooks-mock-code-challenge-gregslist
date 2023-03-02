import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [filteredListings, setFilteredListings] = useState(listings)

  function handleSearchSubmit(filterValue) {
    if (filterValue === "") {
      setFilteredListings(listings)
    } else {
      setFilteredListings(listings.filter((listing) => (listing.description.includes(filterValue) || listing.location.includes(filterValue))))
    }
  }

  return (
    <div className="app">
      <Header onSearchSubmit={handleSearchSubmit}/>
      <ListingsContainer listings={filteredListings} setListings={setListings}/>
    </div>
  );
}

export default App;
