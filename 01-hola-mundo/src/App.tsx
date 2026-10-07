import './App.css'
import Titulo from './components/Titulo'
import Saludo from './components/Saludo'

function App() {

  return (
    <>
          <h1>Hola Mundo</h1>
          <h3>Curso INAP</h3>     
          <Titulo />
          <br/>    
          <Saludo saludo="Hola a todos !!!" />
    </>
  )
}

export default App
