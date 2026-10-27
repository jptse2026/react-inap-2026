import { useNum } from "../context/NumContext";

const ListadoIntentos = () => {
    const { intentos } = useNum();

    return (
        <div className="attempts-content">
            <div className="attempts-heading">
                <h2>Intentos</h2>
                <span className="attempt-count">{intentos.length} en total</span>
            </div>
            {intentos.length === 0 ? (
                <p className="empty-attempts">Todavía no has probado ningún número.</p>
            ) : (
                <ul className="attempt-list">
                {
                    intentos.toReversed().map((intento, indice) => (

                        <li className={`attempt-item${indice === 0 ? " attempt-item-latest" : ""}`} key={`${indice}`}>
                            <span className="attempt-number">#{intentos.length-indice}</span>
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