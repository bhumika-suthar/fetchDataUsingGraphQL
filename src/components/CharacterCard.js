import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "../graphql/favorites";
import styled from "styled-components";

const Card = styled.div`
  background: #222;
  color: white;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  width: 180px;
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);
`;

const Button = styled.button`
  margin-top: 10px;
  background-color: #ff9800;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #e68900;
  }
`;

const CharacterCard = ({ character, isFavorite }) => {
  const [addFavorite] = useMutation(ADD_FAVORITE);
  const [removeFavorite] = useMutation(REMOVE_FAVORITE);

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavorite({ variables: { id: character.id } });
    } else {
      addFavorite({ variables: { id: character.id } });
    }
  };

  return (
    <Card>
      <img src={character.image} alt={character.name} width="100%" />
      <h3>{character.name}</h3>
      <p>Species: {character.species}</p>
      <Button onClick={handleFavorite}>
        {isFavorite ? "Remove Favorite" : "Add to Favorites"}
      </Button>
    </Card>
  );
};

export default CharacterCard;
