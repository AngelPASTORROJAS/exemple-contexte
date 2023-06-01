import { useContext } from 'react'
import './App.css'
import { context } from './reduces/provider'

function App() {
  const [state, dispatch] = useContext(context)
  return (
    <>
    {state.count}
    </>
  )
}

export default App
