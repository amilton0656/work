import {  useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import Rotas from './routes/Rotas';

function App() {

  const navigate = useNavigate()

  useEffect(() => {
    navigate('/')
  }, [])

  return (
    
    <div className='app-main'>
        <Rotas />
    </div>
    )
  }

  export default App;
