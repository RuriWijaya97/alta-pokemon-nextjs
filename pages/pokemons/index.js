import Link from "next/link";
import useFetchPokemon from "../../src/hooks/useFetchPokemon";

export default function Pokemons() {
  const { data } = useFetchPokemon(`https://pokeapi.co/api/v2/pokemon/`);
  const pokemons = data?.results;

  return (
    <div>
      <h1>List Pokemon</h1>
      <ul>
        {pokemons?.map((pokemon, i) => (
          <li>
            <Link key={pokemon.name} href={`/pokemons/${i + 1}`} passHref>
              <a>
                <p>{pokemon.name}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
