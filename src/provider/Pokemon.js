import { createContext, useContext, useReducer } from "react";

const PokemonContext = createContext();
const initialState = {
  catchedPokemons: [],
  area: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CATCH_POKEMON":
      return {
        ...state,
        catchedPokemons: [
          ...state.catchedPokemons,
          ...state.area,
          action.payload,
        ],
      };
    default:
      throw new Error();
  }
};

export const PokemonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PokemonContext.Provider value={{ state, dispatch }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => {
  return useContext(PokemonContext);
};
