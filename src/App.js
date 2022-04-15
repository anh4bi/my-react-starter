import React from 'react'
import { useState, useMemo } from 'react'
import Header from 'components/header/header'
import Main from 'modules/Main'
import LoadingContext from 'core/context/loading-context'

const ME = 'TinhTuTe'

function App() {

const [isLoading, setLoading] = useState(false);
  const value = useMemo(
    () => ({ isLoading, setLoading }),
    [isLoading]
  );


  return (
    <React.Fragment>
    <LoadingContext.Provider value={value}>
      <Header name={ME} />
      <div className="container">
        <Main />
      </div>
      </LoadingContext.Provider>
    </React.Fragment>
  )
}

export default App
