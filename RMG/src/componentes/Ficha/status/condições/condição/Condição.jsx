import "./condição.scss"
import { useState } from "react"

const Condição = ({condição}) => {
  const [abertura, mudarAbertura] = useState(false)

  return (
    <li>
      <div className='condição'>
          <img src={condição.img}/>
          <a onClick={() => {mudarAbertura(a => !a)}}>{condição.nome}</a>
          <div className="texto" id={condição.nome} style={{
            maxHeight: abertura ? "400px" : 0,
            padding: abertura ? "6px 6px 12px 6px" : 0,
            transitionDelay: abertura ? "0s, 0s" : "0s, 0.5s"
          }}>
              <p>{condição.efeito}</p>
              <span className="fonte">Fonte: {condição.fonte}</span>
              <span className="duração">Duração: {condição.duração}</span>
          </div>
      </div>
    </li>
  )
}

export default Condição