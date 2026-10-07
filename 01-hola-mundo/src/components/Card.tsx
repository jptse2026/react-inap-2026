import Saludo from "./Saludo";

interface Props {
  readonly titulo: string;
  readonly contenido: string;
  readonly saludo: string;
};

export default function Card({ titulo, contenido, saludo }: Props) {
  return (
    <div
      style={{
        border: "2px solid #333",
        borderRadius: "10px",
        padding: "1rem",
        marginBottom: "1rem",
        width: "40%",
        margin: "5px auto",
      }}
    >
      <h3>{titulo}</h3>
      <p>{contenido}</p>
      <Saludo saludo={ saludo } />
    </div>
  );
}
