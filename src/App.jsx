import React, { lazy, Suspense } from 'react'
import './App.css'
import Context from './context/Context'

function App() {

  const Landing = lazy(() => import('./pages/Landing'))

  return (
    <Context>
      <Suspense fallback={<p>Loading...</p>}>
        <Landing />
      </Suspense>
    </Context>
  )
}

export default App
