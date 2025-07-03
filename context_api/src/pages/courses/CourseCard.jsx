import React from 'react'

const CourseCard = ({userInfo}) => {
  return (
    <div className='' style={{color:'black',
    padding:"1.5rem",background:"blue",width:"100px",margin:"auto"}}>
      <h4>{userInfo.name}</h4>
      <h4>{userInfo.batch}</h4>
      <h4>{userInfo.type}</h4>
      <h4>{userInfo.duration}</h4>
    </div>
  )
}

export default CourseCard
