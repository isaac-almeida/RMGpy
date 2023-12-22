import "./arcanas.scss"
import { useState } from "react"

const Arcanas = ({arcanas}) => {
  const [abertura, mudarAbertura] = useState(false)
  let componentes = []
  let n = 0
  
  for (let i = 0; i < 10; i++) {
    const arcana = Object.keys(arcanas)[i]
    if (arcanas[arcana] != 0) {
      n++
      const pontos = []
      for(let j = 0; j < 5; j++) {
      pontos.push(
        <li key={j}>
        <img src="./xis.svg" style={{opacity: j >= arcanas[arcana] ? -1 : 1}}/>
        </li>
      )
      }
  
      componentes.push(
      <li className="arcana" key={i}>
        <p>{arcana.charAt(0).toUpperCase() + arcana.slice(1)}:</p>
        <ul>
        {pontos}
        </ul>
      </li>
      )
    }
  }
  const tamanhoArcanas = `${n*30}px`

  return (
    <div className='arcanas'>
      <ul>
        <li className={abertura ? "titulo aberto" : "titulo fechado"} onClick={() => {mudarAbertura(a => !a)}}>Arcanas</li>
        <ul className="container_arcanas" style={{
          maxHeight: abertura ? tamanhoArcanas : 0,
          paddingTop: abertura ? "3px" : 0,
          paddingBottom: abertura ? "6px" : 0,
          transitionDelay: abertura ? "0s, 0s" : "0s, 0s"
        }}>
          {componentes}
        </ul>
      </ul>
    </div>
  )
}

export default Arcanas