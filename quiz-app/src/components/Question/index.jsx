import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'
import { Options } from '../Options'
import "./style.css"

export const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  const currentQuestion = quizState.questions[quizState.currentQuestion]

  return (
    <article id='question'>
        <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>

        <h2>{currentQuestion.question}</h2>

        <section id="options-container">
          {currentQuestion.options.map((options) => (
            <Options options={options} key={options}/>
          ))}
        </section>

        <button onClick={() => dispatch({type: 'CHANGE_QUESTION'})}>Continuar</button>
    </article>
  )
}