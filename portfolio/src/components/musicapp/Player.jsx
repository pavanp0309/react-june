import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import '/node_modules/react-h5-audio-player/lib/styles.css';

const Player = ({ currentsong,setCurrentImg,setCurrentSong,isplaying,setIsPlaying}) => {
  return (
    <div className='container'>
      <AudioPlayer
    autoPlay={isplaying}
    src={currentsong}
    onPlay={()=>setIsPlaying(true)}
    onPause={()=>setIsPlaying(false)}
    />
    </div>
  )
}

export default Player
