
import { useNum } from "../context/NumContext";

const InputNumero = () => {
    const { entrada, setEntrada, comprobar, finalizado} = useNum();

    const intro = (e:React.KeyboardEvent) => {
        if (e.key === "Enter" && entrada !== null && entrada >= 1 && entrada <= 10000) {
            comprobar(entrada);
        }
    }

    return (
        <input
            id="guess-input"
            type="number"
            max="10000"
            min="1"
            step="1"
            value={entrada ?? ""}
            onChange={(e) => setEntrada(e.target.value === "" ? null : Number(e.target.value))}
            onKeyDown={intro}
            disabled={finalizado}
        />
    )
}

export default InputNumero