import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Content from './Content'
import "./Layout.css"

const Layout = ({data}) => {
    // console.log("layoutprops:",props)//
    // data: {name: 'raghu', batch: 'fs-june', duration: '6months', type: 'online'}
    // console.log(props.data) //{name: 'raghu', batch: 'fs-june', duration: '6months', type: 'online'}
    console.log("layoutprops:",data)//
  return (
    <div className='layout'>
        {/* passing down the Props From layout(parent ) to child (header,sidebar,content) */}
       <Header hdata={data} />
       <Sidebar sdata={data}/>
       <Content cdata={data} />
    </div>
  )
}

export default Layout
