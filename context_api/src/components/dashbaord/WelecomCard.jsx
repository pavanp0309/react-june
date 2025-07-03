import React from 'react'

const WelecomCard = ({wdata}) => {
  return (
    <div style={{background:"white",padding:"1.5rem"}}>
      <h1>welcome{wdata.name}</h1>
    </div>
  )
}

export default WelecomCard
