import "./status.scss"
import BarraPv from "./barraPv/BarraPv.jsx"
import BarraMana from "./barraMana/BarraMana.jsx"
import Fdv from "./fdv/Fdv.jsx"
import Pds from "./pds/pds.jsx"
import Condições from "./condições/Condições.jsx"

const Status = ({status}) => {
  return (
    <div className="status">
      <BarraPv pvAtual={status.pvAtual}/>
      <BarraMana manaAtual={status.manaAtual} manaMax={status.manaMax}/>
      <Fdv fdvMax={status.fdvMax} fdvAtual={status.fdvAtual} />
      <Pds pds={status.pds}/>
      <Condições condições={status.condições}/>
    </div>
  )
}

export default Status