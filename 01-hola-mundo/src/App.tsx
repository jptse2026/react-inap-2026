import './App.css'
import Titulo from './components/Titulo'
import Saludo from './components/Saludo'
import Card from './components/Card';


const contenido = {
  card1 : {
    titulo: "Card Superior",
    contenido: "Contenido de la Card Superior",
    saludo: "Etiqueta Saludo en el Card Superior"
  },
  card2 : {
    titulo: "Card Central",
    contenido: "Contenido de la Card Central",
    saludo: "Etiqueta Saludo en el Card Central"
  },
  card3 : {
    titulo: "Card Inferior",
    contenido: "Contenido de la Card Inferior",
    saludo: "Etiqueta Saludo en el Card Inferior"
  }
}

function App() {

  return (
    <>
          <h1>Hola Mundo</h1>
          <h3>Curso INAP</h3>     
          <Titulo />
          <br/>    
          <Saludo saludo="Hola a todos !!!" />
          <br/>
          <main>
            <Card titulo={contenido.card1.titulo} contenido={contenido.card1.contenido} saludo={contenido.card1.saludo} />
            <Card titulo={contenido.card2.titulo} contenido={contenido.card2.contenido} saludo={contenido.card2.saludo} />
            <Card titulo={contenido.card3.titulo} contenido={contenido.card3.contenido} saludo={contenido.card3.saludo} /> 
          </main>
    </>
  )
}

export default App
