import Link from "next/link";
import React from "react";
import { usePokemonContext } from "../../src/provider/Pokemon";

export default function CatchedPokemons() {
  const { state } = usePokemonContext();
  console.log(state);
  return (
    <div>
      <ul>
        {state.catchedPokemons.map((pokemon) => {
          <li key={pokemon.area.url}>
            <h3>{pokemon}</h3>;
          </li>;
        })}
      </ul>
    </div>
  );
}
