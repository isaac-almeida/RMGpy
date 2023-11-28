import "./condições.scss"
import Condição from "./condição/Condição"

const Condições = ({condições}) => {
  let elementos = []
  condições.forEach((cond, i) => {
    elementos.push(<li key={i}>
      <Condição condição={cond}/>
    </li>)
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