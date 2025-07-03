import React from 'react'
import CourseCard from './CourseCard'

const Courselist = ({cldata}) => {
  return (
    <div style={{background:"white",
    height:"240px",padding:"1,3rem",marginTop:"5px"}}>
      <CourseCard userInfo={cldata} />
    </div>
  )
}

export default Courselist
