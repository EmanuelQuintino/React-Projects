import React from 'react'
import imageQuiz from '../../img/quiz.svg'
import "./style.css"

export const Welcome = () => {
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
