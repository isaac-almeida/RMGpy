import './feitiço.scss'

const Feitiço = ({nomeFeitiço, tipo, select}) => {
  const T = tipo ? tipo.charAt(0).toUpperCase() : " "

  return (
    <tbody className='feitiço'>
      <tr>
        <td className="selecionar"><div><img src="d10.png" onClick={(a) => {
          a.target.style.cssText = `
            transform: rotate(1turn);
            transition: transform 1s
          `
          select(nomeFeitiço, T)
          setTimeout(() => {
            a.target.style.cssText = `
            transform: none;
            transition: none
          `
          }, "1000");
          }} /></div></td>
        <td className="item">{nomeFeitiço}</td>
        <td className="tipo">{T}</td>
      </tr>
    </tbody>
  )
}

export default Feitiço