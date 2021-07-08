import { useRouter } from "next/router";
import useFetchPokemon from "../../src/hooks/useFetchPokemon";

export default function DetailPokemon() {
  const { query } = useRouter();
  const id = query?.id;
  const { data: pokemon } = useFetchPokemon(
    id ? `https://pokeapi.co/api/v2/pokemon/${id}` : ""
  );
  const pokemonName = pokemon?.name;
  const pokemonUrl =
    pokemon?.sprites?.other?.["official-artwork"]?.front_default;
  console.log("query", query);
  return (
    <div>
      <h1>{pokemonName}</h1>
      <img src={pokemonUrl} alt="pokemon" />
    </div>
  );
}
