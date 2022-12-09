import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'
import './style.css'
import WellDone from '../../img/welldone.svg'

export const GameOver = () => {
  return (
    <article id='gameOver'>
        <h2>Fim de Jogo!</h2>
        <p>Pontuação: X</p>
        <p>Você acertou Y de Z perguntas</p>
        <img src={WellDone} alt="Fim do Quiz" />
        <button>Reiniciar</button>
    </article>
  )
}
