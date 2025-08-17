import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "../graphql/queries";

export default function Home() {
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id: "1" }, // Rick Sanchez
  });

  if (loading) return <p>Loading character...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { character } = data;

  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>{character.name}</h1>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <img
        src={character.image}
        alt={character.name}
        style={{ borderRadius: "8px", marginTop: "1rem" }}
      />
    </main>
  );
}
