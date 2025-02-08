//import { useEffect, useState } from "react"

//import axios from "axios"

import usePetition from "../hooks/usePetition.js"
import "./Cuadricula.css"

import Cripto from "./cripto/Cripto.jsx"


function Cuadricula() {

  //const API_URL = import.meta.env.VITE_API_URL

  //const [criptos, setCriptos] = useState()

  //alt + 96

  /*
  useEffect(() => {
    
    fetch(`${API_URL}assets`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        setCriptos(data.data)        
      })
      .catch(() => {
        console.error("La petición falló")
      })
    
    axios.get(`${API_URL}assets`)
    .then((data) => {
      setCriptos(data.data.data)        
    })
    .catch(() => {
      console.error("La petición falló")
    })
  }, [])
  */

  const criptos = usePetition("assets")

  if(!criptos) return <span>Cargando ...</span>

  return (
    <div className="app-container">
      <h1>Lista de criptomonedas</h1>    
      <div className="cripto-container">
        { 
          criptos.map(({id, name, priceUsd, symbol, changePercent24Hr}) => (
            <Cripto 
              key={id}
              name={name}
              priceUSD={priceUsd}
              symbol={symbol}
              changePercent24Hr={changePercent24Hr}
              id={id}
            />
          ))
        }
      </div>
    </div>    
  )
}

export default Cuadricula
