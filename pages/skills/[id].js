import Link from "next/link";
import { useRouter } from "next/router";
import useFetchPokemon from "../../src/hooks/useFetchPokemon";

export default function DetailAreas() {
  const { query } = useRouter();
  const id = query?.id;
  const { data: pokemon } = useFetchPokemon(
    id ? `https://pokeapi.co/api/v2/ability/${id}` : ""
  );
  const pokemonList = pokemon?.pokemon;
  console.log("pokemonList", pokemonList);
  return (
    <div>
      <h1>{pokemon?.name}</h1>
      <ul>
        {pokemonList?.map((pokemon) => (
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
