import React, { useState } from "react";
import CharacterList from "./components/CharacterList";
import FavoritesList from "./components/FavoritesList";

const App = () => {
  const [showFavorites, setShowFavorites] = useState(false);

  return (
    <div>
      <button onClick={() => setShowFavorites(!showFavorites)}>
        {showFavorites ? "View All Characters" : "View Favorites"}
      </button>
      {showFavorites ? <FavoritesList /> : <CharacterList />}
    </div>
  );
};

export default App;
