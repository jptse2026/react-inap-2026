import { useNum } from "../context/NumContext";

const BotonReiniciar = () => {
    const { reiniciar } = useNum();

    return (
        <button onClick={ () => reiniciar()}> Reiniciar </button>
    )
}

export default BotonReiniciar