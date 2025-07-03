import React from 'react'

const Header = ({hdata}) => {
  // console.log("headerProps:",props)
  console.log("headerProps:",hdata)
  return (
    <div className='header layout-card'>
      {/* <h1>{props.hdata.name}</h1> */}
      <h1>{hdata.name}</h1>
    </div>
  )
}

export default Header
