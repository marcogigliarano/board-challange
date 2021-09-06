import React from 'react'
import { Board } from 'containers/Board/Board'
import './App.css'
import { BoardProvider } from 'store/board-context'



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ marginLeft: 25, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <h1>Welcome To The Every.io Code Challenge.</h1>
          <div style={{ marginLeft: 50 }}>
            <a
              target="_blank"
              href="https://www.figma.com/proto/kd49ArXbBt0vi1kBSLkmC1/Code-Challenge?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1"
              style={{ color: 'white', background: 'black', padding: 8, borderRadius: 4, display: 'inline-block' }}
              rel="noreferrer">
              Checkout the Prototype
            </a>
          </div>
        </div>
      </header>
      <BoardProvider>
        <Board />
      </BoardProvider>
    </div>
  )
}

export default App
