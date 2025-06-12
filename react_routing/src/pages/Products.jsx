import React from 'react'
import { Link } from 'react-router-dom'

export let product=[
    {id:1,name:"ai-agent",description:"ljhgddfskjh",price:"200"},
    {id:2,name:"aimaster",description:"ljhgddfskjh",price:"200"},
    {id:3,name:"aixcel",description:"ljhgddfskjh",price:"200"},
    {id:4,name:"aipython",description:"ljhgddfskjh",price:"200"},
]

const Products = () => {
  return (
    <div className='container'>
      <div className="row">
        {
            product.map((ele)=>(
                <>
                <div className="col-sm-12 col-lg-3 col-md-3">
                    <Link to={`/products/${ele.id}`}>
                    <div className="card shadow p-5 border border-primary rounded">
                        <h4>{ele.name}</h4>
                        <h4>{ele.price}</h4>
                    </div>
                    </Link>
                </div>
                </>
            ))
        }
      </div>
    </div>
  )
}

export default Products
