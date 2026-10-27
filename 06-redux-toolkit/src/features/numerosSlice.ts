import { createSlice } from "@reduxjs/toolkit";

const generarNumero = () => Math.floor(Math.random() * 10000) + 1

export type Intento = {
  limiteSuperior : number,
  limiteInferior : number,
  relacion : string
}
type NumerosState  = {
  objetivo : number,
  valor : number | null,
  intentos : Intento[],
  finalizado :boolean,
};
const initialState: NumerosState = {
    objetivo: generarNumero(),
    valor : null,
    intentos : [],
    finalizado: false
}

const numerosSlice = createSlice({
  name: "numeros",
  initialState,
  reducers: {
    setValor: (state,action) => {
      state.valor = action.payload;
    },
    comprobar: (state) => {

        if(!state.valor) return;

    
        let resp : string;
        let limiteInferior: number = state.intentos.at(-1)?.limiteInferior ?? 1;
        let limiteSuperior: number = state.intentos.at(-1)?.limiteSuperior ?? 10000; 

            if(state.valor === state.objetivo) {

                resp = `El número que buscabas es el ${ state.valor}`;
                state.finalizado = true;
            }
            else if(state.valor > state.objetivo) {
                limiteSuperior = state.valor;
                resp = `Está entre ${ limiteInferior } y ${ limiteSuperior }`
            }
            else {
                limiteInferior = state.valor;
                resp = `Está entre ${ limiteInferior } y ${ limiteSuperior }`
        }

        state.intentos = [...state.intentos,{ limiteInferior ,limiteSuperior, relacion : resp}];
        state.valor = null;
    },
    reiniciar: () => ({ ...initialState, objetivo : generarNumero()}),
  }
});

export const { comprobar, reiniciar, setValor } = numerosSlice.actions;
export const numerosReducer = numerosSlice.reducer;



