import './App.css'

import InputNumero from './components/InputNumero';
import BotonComprobar from './components/BotonComprobar';
import BotonReiniciar from './components/BotonReiniciar';
import ListadoIntentos from './components/ListadoIntentos';
import { useSelector } from 'react-redux';

function App() {

  const estado = useSelector((s: any) => s.numeros);

  return (
    <main className="game-page">
      <header className="page-heading">
        <p className="eyebrow">Un juego de lógica</p>
        <h1>Adivina el número</h1>
        <p className="page-description">
          Encuentra el número oculto entre 1 y 10.000. Cada intento te dará una pista.
        </p>
      </header>

      <section className="game-layout" aria-label="Juego de adivinar el número">
        <aside className="attempts-card">
          <ListadoIntentos />
        </aside>

        <section className="play-card" aria-label="Controles del juego">
          {!estado.finalizado && (<div className="card-heading">
            <p className="eyebrow">Tu partida</p>
            <h2>¿Cuál es tu número?</h2>
          </div>)}

          {estado.finalizado && (<div className="card-heading">
            <h2>Has acertado en {estado.intentos.length} intentos!!!</h2>
            <p>Pulsa reiniciar para empezar una nueva partida</p>
          </div>)}

          <div className="game-controls">
            <label htmlFor="guess-input">Introduce un número</label>
            <InputNumero />
            <div className="button-row">
              <BotonComprobar />
              <BotonReiniciar />
            </div>
          </div>

          <p className="range-hint">El número está entre 1 y 10.000</p>
          <p className="attempt-summary">
            {estado.intentos.length} {estado.intentos.length === 1 ? 'intento realizado' : 'intentos realizados'}
          </p>
        </section>
      </section>

      <footer className="context-footer">
        El estado del juego se comparte mediante Redux-Toolkit
      </footer>
    </main>
  )
}

export default App
