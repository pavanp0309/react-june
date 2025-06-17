import React,{useState} from 'react'
import { toast } from 'react-toastify'
import Confetti from 'react-confetti'

const TextResizer = () => {
    const [text,setText]=useState(16)
    const [count,setCount]=useState(16)
 
//   text:initial value --->(16):number
//   setText : updater function
// function to handleIncrease text
const handleIncrease=()=>{
    if(text>=42){
        // alert("maximum size is reached")
        toast("maximum size is reached")
    }else{
        setText(text+1)
    }
}
const handleDecrease=()=>{
    if(text<=16){
        // alert("minmum size is reached")
        toast("minmum size is reached")
    }else{
        setText(text-1)
    }
}

const handleReset=()=>{
    setText(16)
}

  return (
    <div className='container '>
        {text==42&&<Confetti />}
     <div className='d-flex flex-column justify-content-center align-items-center' 
     style={{height:"100vh"}}>
         <p className='text-success fw-bold' >
            <span className='text-info'>{text} </span>
            <span style={{fontSize:`${text}px`}}>hello everyone</span>
        </p>
         
      {/* buttons for increasing/text-sizes the text */}
      <div>
        <button className={`btn btn-outline-success shadow ${text==42?"disabled":""}`} onClick={handleIncrease}>+</button>
        <button className='btn btn-outline-danger mx-2 shadow' onClick={handleDecrease}>-</button>
        <button className='btn btn-outline-danger mx-2 shadow' onClick={handleReset}>reset</button>
      </div>
     </div>
    </div>
  )
}

export default TextResizer
