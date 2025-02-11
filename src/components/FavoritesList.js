import React from "react";
import { useQuery } from "@apollo/client";
import { GET_FAVORITES } from "../graphql/favorites";
import CharacterCard from "./CharacterCard";

const FavoritesList = () => {
  const { loading, error, data } = useQuery(GET_FAVORITES);

  if (loading) return <p>Loading favorites...</p>;
  if (error) return <p>Error fetching favorites: {error.message}</p>;

  return (
    <div>
      <h2>Favorites</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {data.favorites.map((character) => (
          <CharacterCard key={character.id} character={character} isFavorite={true} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
