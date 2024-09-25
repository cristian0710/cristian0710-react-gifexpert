import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/style.css'
import ClassAnimal from './ClassAnimal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClassAnimal/>
  </StrictMode>
)
