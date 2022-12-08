import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'
import "./style.css"

export const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  const currentQuestion = quizState.questions[quizState.currentQuestion]

  return (
    <article id='question'>
        <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>

        <h2>{currentQuestion.question}</h2>

        <section id="options-container">
          <p>Opções</p>
        </section>

        <button>Continuar</button>
    </article>
  )
}

//48 min