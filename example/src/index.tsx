import React from 'react'
import ReactDOM from 'react-dom/client'
import { Dice } from 'react-roll-dice'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <h1>Default:</h1>
      <Dice />
    </div>
  </React.StrictMode>,
)
