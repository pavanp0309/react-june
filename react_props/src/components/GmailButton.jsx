
// child Element
let GmailButton=(props)=>{
    console.log("childprops",props) //{name: 'inbox', icon: '🀄', c: 'bg-warning'}
    // step1 : access with dot notation
    //   eg: props.name 
    return(
        <>
        <button className={`btn btn-danger d-block mb-2 ${props.c}`}>{props.icon} {props.name}</button>
        </>
    )
}

export default GmailButton