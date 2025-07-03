import React from 'react'
import Dashboard from '../components/dashbaord/Dashboard'
const Content = ({cdata}) => {
  return (
    <div className='content layout-card'>
      <Dashboard ddata={cdata}/>
    </div>
  )
}

export default Content
