import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'
import './style.css'

export const Options = ({ options }) => {
    const [quizState, dispatch] = useContext(QuizContext)
  return (
    <div className='options'>
        <p className='option'>{options}</p>
    </div>
  )
}
