import Vehiculos from '../Vehiculos/Vehiculos';

import { vehiculosLoader } from '../../utils/vehiculosService';


const VehiculosRuta = {
    path: "vehiculos",
    element: <Vehiculos />,
    loader: vehiculosLoader,
    errorElement: <p style={{ padding: 24 }}>⚠️ No se pudo cargar el listado.</p>,
}

export default VehiculosRuta
