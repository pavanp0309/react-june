import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Services = () => {
  return (
    <div classNameName='container '>
      {/* navbar start */}
      <ul className="nav my-2 w-50 mx-auto justify-content-center p-2 border border-success shadow rounded-5 ">
        <li className="nav-item">
          <NavLink className="nav-link " to={'/services/free'}>Free</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/services/silver'}>Silver</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/services/gold'}>Gold</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/services/premium'}>Premium</NavLink>
        </li>
      </ul>
      {/* navbar end */}
      {/* to display child componets inside parent element we use outlet component from react Route */}
      <Outlet/>
    </div>
  )
}

export default Services
