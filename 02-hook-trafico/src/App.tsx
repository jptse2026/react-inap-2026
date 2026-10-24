import Restriccion from "./components/Restriccion";
import AlertasDGT from "./components/Alertas/AlertasDGT";
import InfoConductor from "./components/InfoConductor";
import Header from "./shared/Header";
import Footer from "./shared/Footer";


import PanelDGT from "./components/PanelDGT";
import VehiculoCard from "./components/VehiculoCard";


export default function App() {
  return (
    <main style={{ padding: 24 }}>
      <Header/>
      <h1>Simulación de restricción DGT</h1>
      <Restriccion />
      
      <h3> Ejemplo de alerta DGT</h3>
      <AlertasDGT/>

      <InfoConductor/>

      <PanelDGT titulo="Zona restringida por contaminación">
        <VehiculoCard
          matricula="5678-XYZ"
          modelo="Renault Clio"
          color="Rojo"
          itv={true}
        />
        <p>🚫 Este vehículo no puede circular hoy por el centro urbano.</p>
      </PanelDGT>

      <Footer/>
    </main>
  );
}




