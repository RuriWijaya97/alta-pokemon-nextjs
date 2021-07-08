import Link from "next/link";
import useFetchPokemon from "../../src/hooks/useFetchPokemon";

export default function Skills() {
  const { data } = useFetchPokemon(`https://pokeapi.co/api/v2/ability/`);
  const skills = data?.results;

  return (
    <div>
      <h1>List Skill</h1>
      <ul>
        {skills?.map((skill, i) => (
          <li>
            <Link key={skill.name} href={`/skills/${i + 1}`} passHref>
              <a>
                <p>{skill.name}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
