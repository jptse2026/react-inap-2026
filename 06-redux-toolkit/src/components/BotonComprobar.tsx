import { useNumDispatch, useNumSelector } from "../store/hooks";
import { comprobar } from '../features/numerosSlice'
import type { RootState } from "../store";


const BotonComprobar = () => {
    const estado = useNumSelector( (s:RootState) => s.numeros);
    const dispatch = useNumDispatch();

    const entradaValida = estado.valor !== null && estado.valor >= 1 && estado.valor <= 10000;

    return (
        <button disabled={!entradaValida} onClick={() => {
            if (entradaValida) dispatch(comprobar())
        }}>Comprobar</button>
    )
}

export default BotonComprobar