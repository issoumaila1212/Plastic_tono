import React from 'react'
import Sidebar from './sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <nav>
      <Sidebar/>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Dashboard