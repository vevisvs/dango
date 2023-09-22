import React from 'react'
import ProductCard from '../productCard/ProductCard'
import '../container/ProductsContainer.css'

const ProductsContainer = () => {
  return (
    <div className='main-container'>
        <span className='btn-container'>Total products in cart:
           <span className='btn-total-products'>1</span> 
        </span>
        <ProductCard />
    </div>
  )
}

export default ProductsContainer
