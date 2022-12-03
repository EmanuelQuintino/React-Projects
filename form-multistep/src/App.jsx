import './App.css'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { UserForm } from './components/UserForm'
import { ReviewForm } from './components/ReviewForm'
import { Thanks } from './components/Thanks'
import { useForm } from './hooks/useForm'
import { FiSend} from 'react-icons/fi'
import { Steps } from './components/Steps'

function App() {
  const formComponents = [<UserForm/>, <ReviewForm/>, <Thanks/>]

  const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useForm(formComponents)

  return (
    <div className="app">

      <header>
        <div className='header'>
          <h1>React-Form</h1>
          <p>
            Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar sua compra.
          </p>
        </div>
      </header>

      <main>
        <div className='form-container'>
          <Steps currentStep={currentStep}/>

          <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
            <div className='inputs-container'>
              {currentComponent}
            </div>

            <div className="actions">
              {!isFirstStep && (
                <button className='button' onClick={(e) => changeStep(currentStep -1, e)}>
                <GrFormPrevious/>
                <span>Voltar</span>
              </button>
              )}

              {!isLastStep ? (
                <button className='submit'>
                <span>Avançar</span>
                <GrFormNext/>
              </button>
              ) : (
                <button className='button'>
                <span>Enviar</span>
                <FiSend/>
              </button>
              ) }
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default App