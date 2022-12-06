import React from 'react'
import imageQuiz from '../../img/quiz.svg'
import "./style.css"
import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'

export const Welcome = () => {
  const quizState = useContext(QuizContext)
  console.log(quizState);
  return (
    <div id='Welcome'>
        <h2>Seja Bem-Vindo!</h2>
        <p>
            Clique no botão abaixo para começar:
        </p>
        <button>Iniciar</button>
        <img src={imageQuiz} alt="Início do Quiz" />
    </div>
  )
}
