import "./barraMana.scss" 
import { motion, useAnimate } from "framer-motion"
import { useState } from "react"


function BarraMana ({manaAtual, manaMax}) {

  const [mana, mudaMana] = useState(manaAtual)
  function clicaBarra () {

    if (mana < manaMax) {
      mudaMana(mana => mana+1)
    }
  }
  function clicaMana () {

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
      <div className="barra" onClick={clicaBarra}><div className="mana" style={{width: mana*240/manaMax+"px"}} onClick={clicaMana}></div></div>
      <motion.div className="qtde" initial={{opacity:0}} >{mana}/{manaMax}</motion.div>
    </div>
  )
}

export default BarraMana