import React, { use } from 'react'
import productsData from '../data/products'
import { useParams,useNavigate } from 'react-router-dom'


const ProductDetails = () => {
  // Extracting the products array from productsData
  const {products}=productsData
  console.log("Product Details:", products)
  // Using useParams to get the dynamic id from the URL
  console.log("useParams:", useParams())
  const {id}=useParams()

  // using useNavigate to navigate programmatically
  let navigate=useNavigate()

  let Detailes=products.find(ele=>ele.id===parseInt(id))
  console.log("Detailes:", Detailes)
  const {thumbnail,title,description,price,rating,stock,reviews}=Detailes
    return (
    <div className='container my-3'>
     <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={thumbnail} className="img-fluid rounded-start" alt="..." width={"100%"} height={"200px"}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text fw-bold">RS:{price}</p>
        <p className="card-text"><small className="text-body-secondary">{stock<=0?"outofstock":stock}</small></p>
        <p className="card-text">Rating:<small className= {`fw-bold text-${rating<4?"danger":"success"}`}>{rating}</small></p>
        <button className='btn btn-outline-success' onClick={()=>navigate('/products')}>Explore more </button>
      </div>
    </div>
  </div>
</div>
      
    </div>
  )
}

export default ProductDetails
