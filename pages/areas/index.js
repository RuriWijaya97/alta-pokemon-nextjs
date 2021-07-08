import Link from "next/link";
import useFetchPokemon from "../../src/hooks/useFetchPokemon";

export default function Areas() {
  const { data } = useFetchPokemon(`https://pokeapi.co/api/v2/location-area/`);
  const areas = data?.results;

  return (
    <div>
      <h1>List Area</h1>
      <ul>
        {areas?.map((area, i) => (
          <li>
            <Link key={area.name} href={`/areas/${i + 1}`} passHref>
              <a>
                <p>{area.name}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
