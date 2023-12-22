import { motion } from "framer-motion"
import "./ficha.scss"
import Status from "./status/Status.jsx"
import Identificação from "./identificação/Identificação.jsx"
import Atributos from "./atributos/Atributos.jsx"
import Habilidades from "./habilidades/habilidades.jsx"
import Arcanas from "./arcanas/Arcanas.jsx"

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
    },
    habilidades: {
      mentais: {
        ciências: 2,
        erudição: 0,
        informática: 5,
        investigação: 1,
        medicina: 0,
        ocultismo: 1,
        ofícios: 0,
        política: 2
      },

      físicas: {
        armamento: 1,
        pontaria: 1,
        briga: 0,
        condução: 3,
        dissimulação: 0,
        esportes: 2,
        furto: 0,
        sobrevivência: 0
      },

      sociais: {
        astúcia: 2,
        empatia: 0,
        expressão: 1,
        intimidação: 0,
        manha: 0,
        persuasão: 0,
        socialização: 0,
        animais: 1
      }
    },
    arcanas: {
      espaço: 5,
      espírito: 1,
      forças: 3,
      matéria: 4,
      mente: 0,
      morte: 0,
      primórdio: 0,
      sorte: 0,
      tempo: 2,
      vida: 0
    }
  }

function Ficha () {
  return (
    <div className="wrapper">
      <div className="ficha">
        <Identificação id={ficha.identificação}/>
        <Status status={ficha.status}/>
        <Atributos atributos={ficha.atributos} />
        <Habilidades habilidades={ficha.habilidades} />
        <Arcanas arcanas={ficha.arcanas} />
      </div>
    </div>
)
}

export default Ficha