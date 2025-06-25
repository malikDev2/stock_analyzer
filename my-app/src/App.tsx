import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Stock report</h1>
      <h2>Categories:</h2>
      <ul>
        <li>Market cap timeline</li>
        <li>Stocks by presidency</li>
        <li>Technology trends</li>
      </ul>
    </>
  )
}

export default App
