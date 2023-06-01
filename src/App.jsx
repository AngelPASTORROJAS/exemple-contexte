import { useContext } from 'react'
import './App.css'
import { Context } from './reduces/provider'

function App() {
  const [state, dispatch] = useContext(Context)
  return (
    <>
    {state.count}
    </>
  )
}

export default App
