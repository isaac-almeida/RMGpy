import "./condições.scss"
import Condição from "./condição/Condição"

const Condições = ({condições}) => {
  let elementos = []
  condições.forEach((cond, i) => {
    elementos.push(
      <Condição condição={cond} key={i}/>
    )
  })
  return (
    <div className='condições'>
      <h4>Condições:</h4>
      <ul>
        {elementos}
      </ul>
    </div>
  )
}

export default Condições