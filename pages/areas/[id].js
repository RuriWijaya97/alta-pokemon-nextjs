import Link from "next/link";
import { useRouter } from "next/router";
import useFetchPokemon from "../../src/hooks/useFetchPokemon";

export default function DetailLocation() {
  const { query } = useRouter();
  const id = query?.id;
  const { data: pokemon } = useFetchPokemon(
    id ? `https://pokeapi.co/api/v2/location-area/${id}` : ""
  );
  const pokemonList = pokemon?.pokemon_encounters;
  console.log("pokemonList", pokemonList);
  return (
    <div>
      <h1>{pokemon?.name}</h1>
      <ul>
        {pokemonList?.map((pokemon, i) => (
          <li>
            <Link
              key={pokemon.pokemon.url}
              href={`/pokemons/${pokemon.pokemon.name}`}
              passHref
            >
              <a>
                <p>{pokemon.pokemon.name}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
