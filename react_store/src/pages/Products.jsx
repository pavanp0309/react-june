import React from 'react'
import productsData from '../data/products'
import { Link } from 'react-router-dom'

const Products = () => {
//  console.log("p",productsData.products) //with dot noation
const {products}=productsData // with destructuring
console.log("p",products) //with destructuring
// to convert object into array format 
// let prodctsAr=Object.values(productsData)
// console.log("pAr",prodctsAr[0]) 



  return (
    <div className='container my-3'>
     <div className="row gy-3">
       {
        products.map((ele,index)=>(
         <div className="col-sm-12 col-lg-3 col-md-3 col-12"  key={ele.id}>
          <Link className='nav-link' to={`/products/${ele.id}`}>
            <div className="card shadow-lg border border-success">
            <img src={ele.images} alt="" className='' width={"100%"} height={"150px"}/>
            <div className="card-body">
              <h5 className='card-title'>{ele.title}</h5>
              <p className='card-text text-secondary'>{ele.description.slice(0,50)}...</p>
              <p className='card-text'>RS{ele.price}</p>
            </div>
          </div>
          </Link>
         </div>
        ))
       }
     </div>
     
    </div>
  )
}

export default Products
