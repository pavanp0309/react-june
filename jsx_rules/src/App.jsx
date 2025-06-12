
import React from "react"
import ProfileCard from "./components/ProfileCard"

// functional component
function App(){
  return(
  <React.Fragment>
     <ProfileCard/>
   <ProfileCard/>
   <ProfileCard/>
  </React.Fragment>
  )
}

export default App

// class components
// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }
