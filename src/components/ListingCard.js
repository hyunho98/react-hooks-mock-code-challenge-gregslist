import React, { useState } from "react";

function ListingCard({ listing, onDeleteListing }) {
  const [favorite, setFavorite] = useState(false)
  const { id, description, image, location } = listing

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
      .then((r) => r.json())
      .then(() => onDeleteListing(listing))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={() => setFavorite(!favorite)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setFavorite(!favorite)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
