

function Card(){
    let cardHeader={
        border:"2px solid red",
        backgroundColor:"oranged",
        padding:".56rem",
        margin:"2px"
    }
    return(
        <>
        <h1>Card-with-inline-styles</h1>
        {/* 1st way of applying the inline style */}
        <div style={{width:"200px",height:300,backgroundColor:"aqua",boxShadow:"3px 3px 4px orange"}}>
          {/* 2nd way of applying inline styles */}
           <div style={cardHeader}>
              <img src="./src/assets/macbook.jpg" alt="" style={{width:"100%",height:"150px"}}/>
              <h3>MACBOOK_Pro</h3>
           </div>
        </div>
        </>
    )
}

export default Card