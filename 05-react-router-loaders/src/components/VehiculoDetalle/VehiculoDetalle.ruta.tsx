import A from './VehiculoDetalle';
import { vehiculoDetalleLoader } from '../../utils/vehiculosService';


const VehiculoDetalleRuta = {
        path: "vehiculos/:matricula",
        element: <A />,
        loader: vehiculoDetalleLoader,
        errorElement: <p style={{ padding: 24 }}>⚠️ Error al cargar el detalle.</p>,
}

export default VehiculoDetalleRuta;