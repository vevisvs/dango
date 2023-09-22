import '../productCard/ProductCard.css';
import data from '../data/data.json'
import ButtonCard from '../button/ButtonCard';
import { useState } from 'react';

const ProductCard = () => {
    const [products, setProducts] = useState(data);

    const handleEditClick = (product) => {
        const updatedProducts = products.map((p) => ({
            ...p,
            isEditing: p.id === product.id,
        }));

        setProducts(updatedProducts);
    }

    const handleBlur = (product) => {
        const updatedProducts = products.map((p) => ({
            ...p,
            isEditing: false,
        }));

        setProducts(updatedProducts);
    }

    const handleChangeTitle = (product, editedTitle) => {
        const updatedProducts = products.map((p) => {
            if (p.id === product.id) {
                return { ...p, title: editedTitle };
            }
            return p;
        });

        setProducts(updatedProducts);
    }

  return (
    <div className='ctn-body'>
        <section className='ctn-cards'>
            {products.map((item, index) => {
                return (
                    <div key={index} className='card'>
                        <img src={item.image}/>
                        {item.isEditing ? (
                            <input
                                value={item.title}
                                onChange={(e) => handleChangeTitle(item, e.target.value)}
                                onBlur={() => handleBlur(item)}
                            />
                        ) : (
                            <h3 className='card-title' onClick={() => handleEditClick(item)}>{item.title}</h3>
                        )}
                        <span className='card-price'>${item.price}.00</span>
                        <span className='card-quantity'>{item.quantity}</span>
                        <p className='card-description'>{item.description}</p>
                        <div className='add-to-cart'>
                            <ButtonCard /> 
                        </div>
                        <p className='expanded-item'>Learn More</p>
                    </div>
                )
            })}
        </section>
    </div>
  )
}

export default ProductCard
