import "./fdv.scss"

const Fdv = ({fdvMax, fdvAtual}) => {


  const pontos = []
  for(let i = 0; i < fdvMax; i++) {
    pontos.push(
      // <li key={i}><label><input type="radio" disabled={true} checked={i >= fdvAtual ? "":true}/></label></li>
      <li key={i}><div style={{
        "background": i >= fdvAtual ? "transparent":'url("./xis.svg")'
      }} onClick={() => {}}></div></li>
    )
  }

  return (
    <div className='fdv'>
        <h4>FdV:</h4>
        <ul>
          {pontos}
        </ul>
    </div>
  )
}

export default Fdv