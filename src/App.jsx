import React, { memo } from "react"
import { useRoutes } from "react-router-dom"
import routes from "./router"
import AppHeader from './components/app-header'
import Footer from './components/app-footer'

const App = memo(() => {
  return(
    <div className="app">
      <AppHeader />
        <div className="page">
          {useRoutes(routes)}
        </div>
      <Footer />
    </div>
  )
});

export default App
