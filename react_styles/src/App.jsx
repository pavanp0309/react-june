import Card from "./Card"
import ProfileCard from "./ProfileCard"
import "./App.css"
import UserProfile from "./UserProfile"
import Doubt from "./Doubt"

function App(){
  return(
    <div style={{display:"flex"}}>
    {/* calling the component */}
    {/* <Card/> */}
    <ProfileCard/>
    <UserProfile/>
    <Doubt/>
    </div>
  )
}

export default App