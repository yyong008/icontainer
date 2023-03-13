import { useState } from 'react'
// import './App.css'
import { ContainerCenter } from '../dist/index.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ContainerCenter
      styles={{
        width: '800px',
        height: '600px'
      }}>
       sdf
      </ContainerCenter>
    </div>
  )
}

export default App
