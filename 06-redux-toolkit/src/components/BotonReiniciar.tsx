import { useDispatch } from "react-redux";
import { reiniciar } from '../features/numerosSlice'


const BotonComprobar = () => {
    const dispatch = useDispatch();

    return (
        <button onClick={ () => dispatch(reiniciar())}> Reiniciar </button>
    )
}

export default BotonComprobar