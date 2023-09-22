import '../productCard/ProductCard.css';
import data from '../data/data.json'
import ButtonCard from '../button/ButtonCard';
import { useState } from 'react';

const ProductCard = ({sizeSelected, fontSizeOptions}) => {
    const [products, setProducts] = useState(data);

    const handleEditClick = (productId) => {
        const updatedProducts = products.map((product) => {
            if (product.id === productId) {
                return { ...product, isEditing: true };
            }
            return product;
        });
        setProducts(updatedProducts);
    }

    const handleBlur = (productId) => {
        const updatedProducts = products.map((product) => {
            if (product.id === productId) {
                return { ...product, isEditing: false };
            }
            return product;
        });
        setProducts(updatedProducts);
    }

    const handleChangeTitle = (productId, editedTitle) => {
        const updatedProducts = products.map((product) => {
            if (product.id === productId) {
                return { ...product, title: editedTitle };
            }
            return product;
        });
        setProducts(updatedProducts);
    }

    return (
        <div className='ctn-body'>
            <section className='ctn-cards'>
                {products.map((item, index) => {
                    return (
                        <div key={index} className='card'>
                            <img src={item.image} alt={item.title} />
                            {item.isEditing ? (
                                <input className='edit-input'
                                    value={item.title}
                                    onChange={(e) => handleChangeTitle(item.id, e.target.value)}
                                    onBlur={() => handleBlur(item.id)}
                                />
                            ) : (
                                <h3
                                    className='card-title'
                                    style={{ fontSize: fontSizeOptions[sizeSelected] }}
                                    onClick={() => handleEditClick(item.id)}
                                >
                                    {item.title}
                                </h3>
                            )}
                            <span className='card-price'>${item.price}</span>
                            <span className='card-quantity'>{item.quantity}</span>
                            <p className='card-description'>{item.description}</p>
                            <div className='add-to-cart'>
                                <ButtonCard />
                            </div>
                            <p className='expanded-item'>Learn More</p>
                        </div>
                    );
                })}
            </section>
        </div>
    );
}

export default ProductCard
