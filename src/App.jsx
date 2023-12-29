import './styles/App.css'
import React from 'react'
import { useRoutes } from 'react-router-dom'
import { allRoutes } from './routes/routes';

function App() {
  const routes = useRoutes(allRoutes);
  return (
    <>
      {routes}
    </>
  )
}

export default App
