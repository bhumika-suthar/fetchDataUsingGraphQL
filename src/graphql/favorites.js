import { gql } from "@apollo/client";

export const GET_FAVORITES = gql`
  query GetFavorites {
    favorites {
      id
      name
      image
      species
    }
  }
`;

export const ADD_FAVORITE = gql`
  mutation AddFavorite($id: ID!) {
    addFavorite(id: $id) {
      id
      name
      image
      species
    }
  }
`;

export const REMOVE_FAVORITE = gql`
  mutation RemoveFavorite($id: ID!) {
    removeFavorite(id: $id) {
      id
    }
  }
`;
