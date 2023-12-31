import { motion } from "framer-motion"
import "./ficha.scss"
import Status from "./status/Status.jsx"
import Identificação from "./identificação/Identificação.jsx"
import Atributos from "./atributos/Atributos.jsx"
import Habilidades from "./habilidades/habilidades.jsx"
import Arcanas from "./arcanas/Arcanas.jsx"
import Feitiços from "./feitiços/Feitiços.jsx"

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
      gnose: 3,
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
    },
    feitiços: {
      "Postcognition": {
        arcana: "tempo",
        nível: 1,
        fator: "potência",
        especialidade: "praxis",
        skill: false
      },
      "Correspondence": {
        arcana: "espaço",
        nível: 1,
        fator: "potência",
        especialidade: "praxis",
        skill: false
      },
      "Veil Sympathy": {
        arcana: "espaço",
        nível: 2,
        fator: "duração",
        especialidade: "clássico",
        skill: "política"
      },
      "Pocket Dimension": {
        arcana: "espaço",
        nível: 4,
        fator: "duração",
        especialidade: false,
        skill: false,
      },
      "Veil Sympathy2": {
        arcana: "espaço",
        nível: 2,
        fator: "duração",
        especialidade: "clássico",
        skill: "política"
      },
      "Pocket Dimension2": {
        arcana: "espaço",
        nível: 4,
        fator: "duração",
        especialidade: false,
        skill: false,
      },
      "Veil Sympathy3": {
        arcana: "espaço",
        nível: 2,
        fator: "duração",
        especialidade: "clássico",
        skill: "política"
      },
      "Pocket Dimension3": {
        arcana: "espaço",
        nível: 4,
        fator: "duração",
        especialidade: false,
        skill: false,
      },
      "Veil Sympathy4": {
        arcana: "espaço",
        nível: 2,
        fator: "duração",
        especialidade: "clássico",
        skill: "política"
      },
      "Pocket Dimension4": {
        arcana: "espaço",
        nível: 4,
        fator: "duração",
        especialidade: false,
        skill: false,
      },
      "Veil Sympathy5": {
        arcana: "espaço",
        nível: 2,
        fator: "duração",
        especialidade: "clássico",
        skill: "política"
      },
      "Pocket Dimension5": {
        arcana: "espaço",
        nível: 4,
        fator: "duração",
        especialidade: false,
        skill: false,
      },
      "Veil Sympathy6": {
        arcana: "espaço",
        nível: 2,
        fator: "duração",
        especialidade: "clássico",
        skill: "política"
      },
      "Pocket Dimension6": {
        arcana: "espaço",
        nível: 4,
        fator: "duração",
        especialidade: false,
        skill: false,
      }
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
        <Feitiços habilidades={ficha.habilidades} arcanas={ficha.arcanas} feitiços={ficha.feitiços} />
      </div>
    </div>
)
}

export default Ficha