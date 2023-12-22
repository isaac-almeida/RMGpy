import './seção.scss'
import { useState } from 'react'

const Sessão = ({skills, nomeSeção}) => {
  const [abertura, mudarAbertura] = useState(false)
  const componentes = []
  let n = 0
  for (let i = 0; i < Object.keys(skills).length; i++) {
    const atributo = Object.keys(skills)[i]
    if (skills[atributo] != 0) {
      n++
      const pontos = []
      for(let j = 0; j < 5; j++) {
          pontos.push(
          <li key={j}>
              <img src="./xis.svg" style={{opacity: j >= skills[atributo] ? -1 : 1}}/>
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
  }
  const tamanhoSeção = `${n*25}px`

  return (
    <li className="seção" key={nomeSeção}>
      <ul>
        <li className={abertura ? "titulo aberto" : "titulo fechado"} onClick={() => {mudarAbertura(a => !a)}}>{nomeSeção.charAt(0).toUpperCase() + nomeSeção.slice(1)}</li>
        <ul className="container_skills" style={{
                maxHeight: abertura ? tamanhoSeção : 0,
                paddingTop: abertura ? "6px" : 0,
                paddingBottom: abertura ? "4px" : 0,
                transitionDelay: abertura ? "0s, 0s" : "0s, 0s"
        }}>
          {componentes}
        </ul>
      </ul>
    </li>
  )
}

export default Sessão