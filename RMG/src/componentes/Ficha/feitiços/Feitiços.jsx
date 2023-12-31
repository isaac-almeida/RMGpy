import './feitiços.scss'
import Feitiço from './feitiço/Feitiço'
import Conjuração from './conjuração/Conjuração'
import { useState } from 'react'


const Feitiços = ({habilidades, arcanas, feitiços}) => {
    const listaFeitiços = Object.keys(feitiços)
    const [atual, mudarFeitiço ] = useState(listaFeitiços[0])
    let detalhesFeitiço = feitiços[atual]
    let determinantes = {
        skill: habilidades[detalhesFeitiço.skill],
        nívelArcana: arcanas[detalhesFeitiço.arcana],
        gnose: arcanas.gnose
    }
    function selecionaFeitiço (nomeFeitiço, tipo) {
        mudarFeitiço(nomeFeitiço)
        detalhesFeitiço = Object.assign({}, feitiços[atual])
        detalhesFeitiço.especialidade = tipo
        determinantes.nívelArcana = arcanas[detalhesFeitiço.arcana]
    }
    
    const componentes = []

    for (let feitiço = 0; feitiço < listaFeitiços.length; feitiço++) {
        const nomeFeitiço = listaFeitiços[feitiço]
        componentes.push(
            <Feitiço nomeFeitiço={nomeFeitiço} key={feitiço} tipo={feitiços[nomeFeitiço].especialidade} select={selecionaFeitiço}/>
        )
    }
    return (
        <div className='feitiços'>
            <Conjuração nomeFeitiço={atual} detalhesFeitiço={detalhesFeitiço} determinantes={determinantes}/>
            <table className='tabelaFeitiços'>
                {componentes}
            </table>
        </div>
    )
}

export default Feitiços