import React, { use } from 'react'
import productsData from '../data/products'
import { Link,useLocation,useNavigate } from 'react-router-dom'

const Products = () => {
//  console.log("p",productsData.products) //with dot noation
const {products}=productsData // with destructuring
console.log("p",products) //with destructuring
// to convert object into array format 
// let prodctsAr=Object.values(productsData)
// console.log("pAr",prodctsAr[0]) 

let navigate=useNavigate() // using useNavigate to navigate programmatically

let location=useLocation()// gets the current location object (URL,pathname,search state, etc.)
// location :consists of entire URL information
console.log("location",location)

// destructuring queryparams (?) from location object
let queryparams=new URLSearchParams(location.search)
console.log("queryparams",queryparams) // returns an object of key-value pairs

// to get the value of a specific query parameter
let category=queryparams.get('category') // returns the value of the 'category' query parameter
let sort=queryparams.get('sort') // returns the value of the 'sort' query parameter

//  function for handling the query parameters
const handleFilter=(key,value)=>{
  if(value){
  //  if value is present  add it to the URL
  queryparams.set(key,value)  //http://localhost:5173/products?category=beauty
  }else{
  // if value is not present, remove it from the URL
  queryparams.delete(key,value) //http://localhost:5173/products
  }
  // navigate to the new URL with query parameters
 navigate(`/products?${queryparams.toString()}`) // converts the queryparams object to a string and appends it to the URL
}


// filtering products based on category
// ternary_opertor  : condition ? exprIfTrue : exprIfFalse
let filteredProducts=products.filter((prod)=>category?prod.category===category:true)

// steps: handlefilter->setqueryparames---navigate->location->queryparams(urlsearchparams)->filtering products
// // sorting products based on price
if(sort=="low"){
  filteredProducts=filteredProducts.sort((a,b)=>a.price-b.price) // ascending order
}else if(sort=="high"){
  filteredProducts=filteredProducts.sort((a,b)=>b.price-a.price) // decending order
}




  return (
    <div className='container my-3'>
     {/* Filters section-start */}
     <div className="d-flex justify-content-between align-items-center mb-3">
      {/* navbar-start */}
      <ul className="nav border border-success rounded-3 p-2 mb-3 shadow">
          <li className="nav-item">
            <button className="nav-link " onClick={()=>handleFilter("category","beauty")} >Beauty</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={()=>handleFilter("category","fragrances")}>fragrances</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={()=>handleFilter("category","furniture")} >furniture</button>
          </li>
           <li className="nav-item">
            <button className="nav-link" onClick={()=>handleFilter("category","groceries")}>groceries</button>
          </li>
      </ul>
{/* navbar-end */}
{/* pricing section */}
      <div className='price-filter border border-success rounded-3 p-2 mb-3 shadow'>
            <Link className='btn btn-success mx-1' to={`/products?sort=low`}>LowTohigh</Link>
            <Link className='btn btn-danger'  to={`/products?sort=high`}>HighTolow</Link>
      </div>
{/* pricing-section-end */}
     </div>
     {/* Filters section-end */}

     <div className="row gy-3">
       {
       filteredProducts.map((ele,index)=>(
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
