import React from 'react'
// loads only the Required pages without loading all at once
let Home=React.lazy(()=>import("./pages/Home"))
let About=React.lazy(()=>import("./pages/About"))
let Contact=React.lazy(()=>import("./pages/Contact"))
let Services=React.lazy(()=>import("./pages/Services"))
let NotFound=React.lazy(()=>import("./pages/NotFound"))
let UpComing=React.lazy(()=>import("./pages/UpComing"))
import { Routes,Route, Navigate } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Routes>
      {/* public_routes */}
      {/* url: localhost:5173 ---default*/}
      {/* helps in navaigating to Home with the url path has url: localhost:5173/home  as default path*/}
      <Route path='/' element={<Navigate to="/home" replace/>}/> 
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/upcoming' element={<UpComing/>}/>
      {/* not Found-page */}
      <Route path='*' element={<NotFound/>}/>
    </Routes>
      
    </>
  )
}

export default App
