import React from 'react'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

        <main className="flex-1 pb-16">
          <Outlet />
        </main>
      <Footer />
    </div>
  )
}

export default Layout