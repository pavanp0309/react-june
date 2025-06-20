import {useState} from 'react'
import Player from './Player'
import Albums from './Albums'
import songs from './musicData'
 

const MusicApp = () => {
  console.log("songs",songs[0].songs[0].src)
  // MusicApp---><---albums--player 
  // usestate for holding the Current previous and next songs and images and player actions 
  let [currentsong,setCurrentSong]=useState(songs[0].songs[0].src)
  let [currentimg,setCurrentImg]=useState(songs[0].songs[0].image)
  let [isplaying,setIsPlaying]=useState(false)



  return (
    <div>
      {/* passing the state props to child elements */}
      <Albums
       currentsong={currentsong}
       currentimg={currentimg}
       setCurrentImg={setCurrentImg}
       setCurrentSong={setCurrentSong}
       setIsPlaying={setIsPlaying}
      />
      <Player
       currentsong={currentsong}
       setCurrentImg={setCurrentImg}
       setCurrentSong={setCurrentSong}
       isplaying={isplaying}
       setIsPlaying={setIsPlaying}
      />
    </div>
  )
}

export default MusicApp
