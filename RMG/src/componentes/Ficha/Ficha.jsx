import { motion } from "framer-motion"
import "./ficha.scss"
import Status from "./status/Status.jsx"
import Identificação from "./identificação/Identificação.jsx"
import Atributos from "./atributos/Atributos.jsx"

const ficha = {
    identificação: {
      pfp: "https://upload.wikimedia.org/wikipedia/commons/5/57/Emoji_u1f61d.svg",
      nome: "Adrino Lipskipskipskipskipskipskipskips",
      titulo: "Maluco de Aluguel",
    },
    status: {
      pvMax: 9,
      pvAtual: "000000021",
      manaMax: 16,
      manaAtual: 8,
      manaNova: 14,
      fdvMax: 10,
      fdvAtual: 3,
      pds: 1.2,
      condições: [
        {
          nome: "Inspirada",
          efeito: "Pode encerrar a condição antes de uma rolagem para que ela obtenha qualiadade de praxis.",
          fonte: "acerto crítico",
          duração: "1 cena",
          img: "https://cdn-icons-png.flaticon.com/512/551/551080.png"
        },
        {
          nome: "uiuiui",
          efeito: "aaaaaaaaaaaaaaa",
          fonte: "arial 12",
          duração: "dura",
          img: "./jabuticaba.png"
        }
      ],
    },
    atributos: {
      inteligência: 2,
      força: 3,
      presença: 4,

      raciocínio: 3,
      destreza: 2,
      manipulação: 1,

      perseverança: 4,
      vigor: 2,
      autocontrole: 1
    }
  }

function Ficha () {
  return (
    <div className="wrapper">
      <div className="ficha">
        <Identificação id={ficha.identificação}/>
        <Status status={ficha.status}/>
        <Atributos atributos={ficha.atributos} />
        <Habilidades habilidades={fi}
      </div>
    </div>
)
}

export default Ficha