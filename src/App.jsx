import React from 'react'

// PAGES
import Nav from './Components/Navbar'
import './index.css'
import ErrorPage from './routes/error-page'
import { Outlet } from 'react-router'

function App() {
  return (
    <div className='container'>
      <Nav />
      <Outlet />
    </div>
  )
}

export default App
