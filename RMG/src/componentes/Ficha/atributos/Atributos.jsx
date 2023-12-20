import "./atributos.scss"
import { useState } from "react"

const Atributos = (atributos) => {
  const [abertura, mudarAbertura] = useState(false)

  atributos = atributos.atributos
  let componentes = []
  for (let i = 0; i < 9; i++) {
    const atributo = Object.keys(atributos)[i]
    const pontos = []
    for(let j = 0; j < 5; j++) {
      // console.log(atributo)
      // console.log(atributos.atributo)
      // console.log(typeof atributos.atributo)
      pontos.push(
        <li key={j}>
          <img src="./xis.svg" style={{opacity: j >= atributos[atributo] ? -1 : 1}}/>
        </li>
      )
    }
  
    componentes.push(
      <li className="atributo" key={i}>
        <p>{atributo.charAt(0).toUpperCase() + atributo.slice(1)}:</p>
        <ul>
          {pontos}
        </ul>
      </li>
    )
  }
  return (
    <div className='atributos'>
      <ul>
        <li className={abertura ? "titulo aberto" : "titulo fechado"} onClick={() => {mudarAbertura(a => !a)}}>Atributos</li>
          <ul className="rappi" id="atributos" style={{
            maxHeight: abertura ? "350px" : 0,
            paddingTop: abertura ? "6px" : 0,
            paddingBottom: abertura ? "12px" : 0,
            transitionDelay: abertura ? "0s, 0s" : "0s, 0s"
          }}>
            {componentes}
          </ul>
      </ul>
    </div>
  )
}

export default Atributos