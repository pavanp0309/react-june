import React from 'react'
import songs from './musicData'

const Albums = ({ currentsong, currentimg, setCurrentImg,setCurrentSong,setIsPlaying}) => {
   
  return (
    <div className='container my-2'>
    <div className='border border-danger'>
        <img src={currentimg} alt="no-img" 
        className='img-fulid' width={"100%"} height={"150px"} />
    </div>
    {/* row for movie albums */}
      <div className="row gy-2 my-2">
         {
          songs.map((albums)=>(
            <div className="col-sm-4 col-lg-4 col-md-4" key={albums.id}>
                <div className="card p-3 shadow" onClick={()=>{
                    setCurrentImg(albums.songs[0].image) //updating image with setCurrentImage updater usestate function
                    setCurrentSong(albums.songs[0].src) //updating image with setCurrentSong updater usestate function
                    setIsPlaying(true) // //updating the the player
                 }}>
                 <img src={albums.image} alt=""  className='' width={"100%"} height={"100px"}/>
                </div>
            </div>
          ))
         }
      </div>
    </div>
  )
}

export default Albums
