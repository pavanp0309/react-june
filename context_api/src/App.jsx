import {useState} from 'react'
import Layout from './layout/Layout'

const App = () => {
  let [user,setUser]=useState({name:"raghu",batch:"fs-june",duration:"6months",type:"online"})
  return (
    <div>
      {/* rule1:Props must be Passed from Parent to child only through html attributes */}
      {/* Child of app component and user data is passed to layout from app */}
      <Layout data={user}/>
    </div>
  )
}

export default App
