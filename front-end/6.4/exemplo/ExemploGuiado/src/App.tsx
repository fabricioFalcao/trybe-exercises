import './App.css'
import { fetchDogImage } from './redux/actions'
import { Dispatch, ReduxState } from './types'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const rootState = useSelector((state: ReduxState) => state)
  const dispatch: Dispatch = useDispatch()

  if (rootState.isFetching) return <p>Carregando...</p>

  return (
    <div>
     <button 
    onClick={() => dispatch(fetchDogImage())}
    >
      Novo Doguinho
    </button>
    {
        rootState.imageURL
        && <img
          src={ rootState.imageURL }
          alt="Imagem de um cachorro aleatório"
        />
      }
  </div>
  )
}

export default App
