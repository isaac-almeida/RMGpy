import './habilidades.scss'
import Seção from './seção/Seção'
import { useState } from 'react'

const Habilidades = ({habilidades}) => {
    const [abertura, mudarAbertura] = useState(false)
    const seções = []

    for (let seção = 0; seção < 3; seção++) {
        const nomeSeção = Object.keys(habilidades)[seção]
        seções.push(
            <li key={seção} className="seção">
                <Seção skills={habilidades[nomeSeção]} nomeSeção={nomeSeção}/>
            </li>
        )

    }
    return (
        <div className='habilidades'>
            <ul className="wrap_habilidades">
                <li className={abertura ? "titulo aberto" : "titulo fechado"} onClick={() => {mudarAbertura(a => !a)}}>Habilidades</li>
                <ul className="container_seções" id="habilidades" style={{
                maxHeight: abertura ? "500px" : 0,
                paddingTop: abertura ? "6px" : 0,
                paddingBottom: abertura ? "12px" : 0,
                transitionDelay: abertura ? "0s, 0s" : "0s, 0s"
                }}>
                {seções}
                </ul>
            </ul>
        </div>
    )
}

export default Habilidades