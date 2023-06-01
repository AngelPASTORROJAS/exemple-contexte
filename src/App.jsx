import { useContext } from 'react'
import './App.css'
import { context } from './reduces/provider'
import Button from './components/Button'

function App() {
  const [state, dispatch] = useContext(context)
  return (
    <>
    {state.count}
    <Button></Button>
    </>
  )
}

export default App
