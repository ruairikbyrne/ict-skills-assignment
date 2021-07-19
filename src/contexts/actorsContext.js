import React, { useState } from "react";

export const ActorsContext = React.createContext(null);

const ActorsContextProvider = (props) => {
  
  const [actorFavorites, setFavorites] = useState( [] )
  

  const addToFavorites = (actor) => {
    setFavorites([...actorFavorites,actor.id])
  };
  // We will use this function in a later section
  const removeFromFavorites = (actor) => {
    setFavorites( actorFavorites.filter(
      (aId) => aId !== actor.id
    ) )
    
  };

  
  return (
    <ActorsContext.Provider 
      value={{
        actorFavorites,
        addToFavorites,
        removeFromFavorites,

    }}
    >
      {props.children}
    </ActorsContext.Provider>
  );
};

export default ActorsContextProvider;