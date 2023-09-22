import React from 'react'
import { useState } from 'react'
import ProductCard from '../productCard/ProductCard'
import '../container/ProductsContainer.css'
import data from '../data/data.json'

const ProductsContainer = () => {
  const [sizeSelected, setSizeSelected] = useState("medium");

  const fontSizeOptions = {
    small: "0.8rem",
    medium: "0.9rem",
    big: "1rem",
};

  return (
    <div className='main-container'>
        <span className='btn-container'>Total products:
           <p className='btn-total-products'>
              {
                data.reduce((acc, item) => {
                  return acc + item.quantity;
                }, 0) 
              }
            </p> 
        </span>
        <div className='select-list'>
            <span>Select a font size for product titles</span>
            <select className='list-sizes' defaultValue={1} onChange={(e) => setSizeSelected(e.target.value)}>
              <option value={1} disabled></option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="big">Big</option>
            </select>
        </div>
        <ProductCard sizeSelected={sizeSelected} fontSizeOptions={fontSizeOptions}/>
    </div>
  )
}

export default ProductsContainer
