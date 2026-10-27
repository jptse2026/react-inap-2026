import { useSelector } from "react-redux";
import type { Intento } from "../features/numerosSlice";


const ListadoIntentos = () => {
    const estado = useSelector( (s:any) => s.numeros);

    return (
        <div className="attempts-content">
            <div className="attempts-heading">
                <h2>Intentos</h2>
                <span className="attempt-count">{estado.intentos.length} en total</span>
            </div>
            {estado.intentos.length === 0 ? (
                <p className="empty-attempts">Todavía no has probado ningún número.</p>
            ) : (
                <ul className="attempt-list">
                {
                    estado.intentos.toReversed().map((intento: Intento, indice: number) => (

                        <li className={`attempt-item${indice === 0 ? " attempt-item-latest" : ""}`} key={`${indice}`}>
                            <span className="attempt-number">#{estado.intentos.length-indice}</span>
                            <span>{intento.relacion}</span>
                        </li>
                    ))
                }
                </ul>
            )}
        </div>
    )
}

export default ListadoIntentos