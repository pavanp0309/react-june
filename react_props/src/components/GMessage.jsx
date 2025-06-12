

const GMessage = (props) => {
    // 2nd way destructuring the content
    const {icon,name,content,time,c,imp}=props
  return (
    <div className={` d-flex justify-content-around border border-danger ${c} `}>
      {
      imp?(<>
       <p className="icons">{icon}</p>
        <p className="name">{name}</p>
        <p className="content">{content}</p>
        <p className="time">{time}</p>

      </>):(<>
      <h1>not so important</h1>
      </>)
      }
    </div>
  )
}

export default GMessage
