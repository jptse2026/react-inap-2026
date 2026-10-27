import { createContext, useContext, useState, type ReactNode } from "react";

type Intento = {
  limiteSuperior : number,
  limiteInferior : number,
  relacion : string
}
type Ctx = {
  entrada : number,
  setEntrada : (valor:number | null) => void,  
  intentos : Intento[],
  finalizado :boolean,
  comprobar : ( valor : number ) => void,
  reiniciar : () => void
};

const NumContext = createContext<Ctx | null>(null);

const generarNumero = () => Math.floor(Math.random() * 10000) + 1

export function NumProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [ objetivo, setObjetivo ] = useState(generarNumero);
  const [ intentos, setIntentos ] = useState<Intento[]>([]);
  const [ entrada, setEntrada ] = useState<number | null>(null);
  const [ finalizado, setFinalizado] = useState(false);

  const comprobar = ( valor : number ) => {    
    setEntrada(null);

    
    let resp : string;
    let limiteInferior: number = intentos.at(-1)?.limiteInferior || 1;
    let limiteSuperior: number = intentos.at(-1)?.limiteSuperior || 10000; 

    if(valor === objetivo) {
      limiteSuperior = valor;
      limiteInferior = valor;
      resp = `El número que buscabas es el ${ valor}`;
      setFinalizado(true);
    }
    else if(valor > objetivo) {
        limiteSuperior = valor;
        resp = `Está entre ${ limiteInferior } y ${ limiteSuperior }`
    }
    else {
        limiteInferior = valor;
        resp = `Está entre ${ limiteInferior } y ${ limiteSuperior }`
   }

    setIntentos(  prev => [...prev, {limiteInferior  : limiteInferior, limiteSuperior : limiteSuperior, relacion: resp} ])
    
  }

  const reiniciar = () => {
    setObjetivo(Math.floor(Math.random() * 10000) + 1);
    setIntentos([]);
    setEntrada(null);
    setFinalizado(false);
  }


  return (
    <NumContext.Provider value={{  intentos, comprobar, reiniciar, entrada, setEntrada, finalizado }}>
      {children}
    </NumContext.Provider>
  );
}

// Hook para usarlo cómodamente
export function useNum() {
  const ctx = useContext(NumContext);
  if (!ctx) throw new Error("useNum debe usarse dentro de <NumProvider>");
  return ctx;
}
