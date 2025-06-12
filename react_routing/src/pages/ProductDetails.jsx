import React from 'react'
import { product } from './Products'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    let prod=useParams()
    console.log( typeof prod.id)

    let pdetails=product.find(ele=>ele.id==parseInt(prod.id))
    console.log(pdetails)

  return (
    <div>
     <p>{pdetails.name}</p>
     <p>{pdetails.description}</p>
     <p>{pdetails.price}</p>
    </div>
  )
}

export default ProductDetails
