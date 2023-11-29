import "./barraMana.scss" 
import { motion, useAnimate } from "framer-motion"
import { useState } from "react"


function BarraMana ({manaAtual, manaMax}) {
  const [alvo, animação] = useAnimate()
  function mostrarMana () {
    
  }

  const [mana, mudaMana] = useState(manaAtual)
  function aumentaMana () {
    if (mana < manaMax) {
      mudaMana(mana => mana+1)
    }
  }
  function diminuiMana () {
    if (mana != manaMax) {
      mudaMana(mana => mana-2)
    }
    else {
      mudaMana(mana => mana-1)
    }
  }

  return (
    <div className="barraMana">
      <h4>MP: </h4>
      <div className="barra" onClick={aumentaMana} ><div className="mana" style={{width: mana*240/manaMax+"px"}} onClick={diminuiMana}></div></div>
      <motion.div className="qtde" ref={alvo} initial={{opacity:0}} >{mana}/{manaMax}</motion.div>
    </div>
  )
}

export default BarraMana