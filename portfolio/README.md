import { useState } from 'react'

const MusicApp = () => {
    const [movie,setMovie]=useState("HIT") // string format
    const [moviedetails,setMovieDetails]=useState({name:"Hit",Hero:"Nani",Cost:200}) // object format
    // movie : variable  that holds the initialvalue 
    // setMovie: updater function used for updating initial value

    // funtion to handle movie change
    let handleMovieChange=()=>{
        setMovie("HIT3")
    }
      // funtion to handle movie change
    let handleMovieChange1=()=>{
        setMovieDetails({...moviedetails,name:"HIT3",})
    }

  return (
    <div>
      <p>{movie}</p> 
      <button className='btn btn-primary' onClick={handleMovieChange}>BookMovie</button>
      <h1>UseSatate with objects</h1>
      <p>{moviedetails.name}</p>
      <p>{moviedetails.Hero}</p>
      <p>{moviedetails.Cost}</p>
       <button className='btn btn-primary' onClick={handleMovieChange1}>BookMovie</button>
    </div>
  )
}

export default MusicApp
