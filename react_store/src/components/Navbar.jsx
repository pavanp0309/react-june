import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to={'/home'}>SP MARKET</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link"  to={'/home'}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to={'/products'}>Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to={'/recipes'}>Recipes</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to={'/blog'}>Blog</NavLink>
        </li>
      </ul>
      {/* login start */}
      <button className='btn btn-outline-success px-3 fw-bold'>Login</button>
      {/* login end */}
    </div>
  </div>
</nav>
  )
}

export default Navbar
