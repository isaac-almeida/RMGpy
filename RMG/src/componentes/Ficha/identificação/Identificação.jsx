import "./identificação.scss"

const Identificação = ({id}) => {
  function Texto () {
    let maiorTamanho = 0
    id.nome.split(" ").forEach(palavra => palavra.length > maiorTamanho ? maiorTamanho = palavra.length : {})
    let tamanhoFonte = 180/maiorTamanho

    if (tamanhoFonte > 30) {
      tamanhoFonte = 30
    }
    
    return(
      <div className="profTextContainer">
        <div className="nome" style={{"fontSize": tamanhoFonte+"px"}}>{id.nome}</div>
        <div className="titulo" style={{"fontSize": tamanhoFonte*0.6+"px"}}>{id.titulo}</div>
      </div>
    )
  }

  return (
    <div className="identificação">
      <div className="pfpContainer">
        <img src={id.pfp} alt={id.nome + ', ' + id.titulo} />
      </div>
      <Texto/>
    </div>
  )
}

export default Identificação