import "./pds.scss"

const Pds = ({pds}) => {
  return (
    <div className="pds">
        <h4>PdS: </h4>
        <span>{pds}</span>
        <button><a className="mais">+</a></button>
        <button><a className="menos">-</a></button>
    </div>
  )
}

export default Pds