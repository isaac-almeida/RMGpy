import "./condição.scss"
import { useState } from "react"

const Condição = ({condição}) => {
  const [abertura, mudarAbertura] = useState(false)

  return (
    <li id={condição.nome} className={abertura ? "aberto" : "fechado"}>
      <div className='condição'>
          <img src={condição.img}/>
          <a onClick={() => {mudarAbertura(a => !a)}}>{condição.nome}</a>
          <div className="texto" style={{
            maxHeight: abertura ? "400px" : 0,
            paddingTop: abertura ? "6px" : 0,
            paddingBottom: abertura ? "12px" : 0,
            transitionDelay: abertura ? "0s, 0s" : "0s, 0s"
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