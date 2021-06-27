import React from 'react'
import { DashBoardTemplate, Sidebar } from 'components'

const Dashboard = () => {
  return (
    <DashBoardTemplate
      sidebar={<Sidebar />}
    >
      DashBoard
    </DashBoardTemplate>
  )
}

export default Dashboard
