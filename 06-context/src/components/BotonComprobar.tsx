import { useNum } from "../context/NumContext";

const BotonComprobar = () => {
    const { entrada, comprobar } = useNum();
    const entradaValida = entrada !== null && entrada >= 1 && entrada <= 10000;

    return (
        <button disabled={!entradaValida} onClick={() => {
            if (entradaValida) comprobar(entrada);
        }}>Comprobar</button>
    )
}

export default BotonComprobar