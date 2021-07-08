import Link from "next/link";
import { useRouter } from "next/router";
import useFetchPokemon from "../../src/hooks/useFetchPokemon";
import { usePokemonContext } from "../../src/provider/Pokemon";

export default function DetailLocation() {
  const { query } = useRouter();
  const id = query?.id;
  const { data: pokemon } = useFetchPokemon(
    id ? `https://pokeapi.co/api/v2/location-area/${id}` : ""
  );
  const pokemonList = pokemon?.pokemon_encounters;
  console.log("pokemonList", pokemonList);

  const { state, dispatch } = usePokemonContext();

  console.log("state", state);

  return (
    <div>
      <ul>
        <li>
          <Link href={`/catched-pokemon/`}>
            <a>Catched Pokemon</a>
          </Link>
        </li>
      </ul>
      <h1>{pokemon?.name}</h1>
      <ul>
        {pokemonList?.map((pokemon, i) => (
          <li
            key={pokemon.pokemon?.url}
            onClick={() => {
              dispatch({
                type: "CATCH_POKEMON",
                payload: pokemon.pokemon?.name,
              });
            }}
          >
            {pokemon.pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
