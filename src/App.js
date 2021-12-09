import React from 'react'
import Header from './components/header/header'
import Main from './modules/main'

const ME = 'TinhTuTe'

function App() {
  return (
    <React.Fragment>
      <Header name={ME} />
      <div className="container">
        <Main />
      </div>
    </React.Fragment>
  )
}

export default App
