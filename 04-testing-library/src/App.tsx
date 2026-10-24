import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addCount = () => setCount(count + 1)
  const restCount = () => {
    if(count === 0 ) return;
    setCount(count - 1);
  }

  return (
    <>
      <section id="center">
        <h1>Contador : {count}</h1>
        <div style={{ display : "flex", gap : 5}}>
        <button
          type="button"
          className="counter"
          onClick={() => addCount()}
        >
          Count ++
        </button>
        <button
          type="button"
          className="counter"
          onClick={() => restCount()}
        >
          Count --
        </button>
        </div>
      </section>

      <div className="ticks"></div>

      

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
