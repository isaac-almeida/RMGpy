import "./condição.scss"
import { useState } from "react"
import { motion } from "framer-motion"

const Condição = ({condição}) => {
  const [estado, mudarEstado] = useState(false)

  function muda () {
    mudarEstado(estado => !estado)
  }

  const variants = {
    "fechado": {
      height: 0,
      padding: 0
    },
    "aberto": {
      height: "auto",
    }
  }
  return (
    <div className='condição' style={{"listStyle": estado ? "▼" : ">"}}>
        <img src={condição.img}/>
        <a onClick={muda}>{condição.nome}</a>
        <motion.div className="texto" variants={variants} animate={estado ? "aberto" : "fechado"}>
            <p>{condição.efeito}</p>
            <span className="fonte">Fonte: {condição.fonte}</span>
            <span className="duração">Duração: {condição.duração}</span>
        </motion.div>
    </div>
  )
}

export default Condição