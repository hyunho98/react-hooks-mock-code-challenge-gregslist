import React, { useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, setListings }) {
  useEffect(() => {
    fetch(`http://localhost:6001/listings`)
      .then((r) => r.json())
      .then((data) => setListings(data))
  }, [])

  const listingCards = listings.map((listing) => {
    return (
      <ListingCard
        key={listing.id}
        listing={listing}
        onDeleteListing={handleListingDelete}
      />
    )
  })

  function handleListingDelete(deletedListing) {
    const updatedListings = 
    listings.filter((listing) => listing.id !== deletedListing.id)

    setListings(updatedListings)
  }

  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
