import { Link } from "react-router-dom";

const data = [
  "1234BCD",
  "5678XYZ",
  "2468FGH",
  "1357JKL",
  "9081MNP",
  "4720RST",
  "6813VWX",
  "3592BCD"
];

export default function Vehiculos() {
  return (
    <>
      <h1>🚗 Vehículos</h1>
      <ul>
        {data.map(m => (
          <li key={m}><Link to={`/vehiculos/${m}`}>{m}</Link></li>
        ))}
      </ul>
    </>
  );
}
