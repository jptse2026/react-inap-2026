import { useNumDispatch, useNumSelector } from "../store/hooks";
import { comprobar, setValor } from "../features/numerosSlice";
import type React from "react";
import type { RootState } from "../store";



const InputNumero = () => {

    const estado = useNumSelector( (s:RootState) => s.numeros)
    const dispatch = useNumDispatch();
    const handleEnter = (e:React.KeyboardEvent) => {
        if (e.key === "Enter" && estado.valor !== null && estado.valor >= 1 && estado.valor <= 10000) {
            dispatch(comprobar());
            dispatch(setValor(null));
        }
    }

    return (
        <input
            id="guess-input"
            type="number"
            max="10000"
            min="1"
            step="1"
            value={estado.valor ?? ""}
            onChange={(e) => {
                const a = e.target.value;
                dispatch(setValor(a === "" ? null:Number(a)))
            }}
            onKeyDown={(e) => handleEnter(e)}
            disabled={estado.finalizado}
        />
    )
}

export default InputNumero