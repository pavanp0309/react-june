import React from 'react'
import WelecomCard from './WelecomCard'
import Courselist from '../../pages/courses/Courselist'

const Dashboard = ({ddata}) => {
  return (
    <div>
      <WelecomCard wdata={ddata}/>
      <Courselist cldata={ddata}/>
    </div>
  )
}

export default Dashboard
