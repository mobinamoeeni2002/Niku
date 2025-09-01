import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import './Products.css';
import soloc8 from './ceight.JPG';
import soloc15 from './cfifthin.JPG';
import soloNi5 from './Nifive.JPG';
import soloNi10 from './Niten.JPG';

const Product = ({ product, isRecommended = false, recommendationIndex = 0 }) => {
  const handleAddToCart = () => {
    // Add your cart logic here
    console.log('Added to cart:', product.name);
  };

  return (
    <div className="product-card">
      {isRecommended && (
        <div className="product-badge">
          <span>پیشنهاد ویژه {recommendationIndex + 1}</span>
        </div>
      )}
      
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
        />
      </div>
      
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        
        <div className="product-benefits">
          {product.benefits.map((benefit, idx) => (
            <span key={idx} className="benefit-tag">
              {benefit}
            </span>
          ))}
        </div>
        
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
              />
            ))}
          </div>
          <span className="rating-text">({product.rating})</span>
        </div>
        
        <div className="product-price">
          <span className="current-price">{product.price} تومان</span>
          {product.originalPrice && (
            <span className="original-price">{product.originalPrice} تومان</span>
          )}
        </div>
        
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          <ShoppingCart />
        </button>
      </div>
    </div>
  );
};

// Products data
export const productsData = [
  {
    id: 1,
    name: "سولو سرم ویتامین C8%",
    price: "816,000",
    originalPrice: "960,000",
    image: soloc8,
    rating: 4.8,
    benefits: ['روشن کننده', 'ضد پیری', 'آنتی اکسیدان'],
    suitableFor: ['normal', 'dry', 'combination']
  },
  {
    id: 2,
    name: "سولو سرم ویتامین C15%",
    price: "855,100",
    originalPrice: "1,060,000",
    image: soloc15,
    rating: 3.6,
    benefits: ['روشن کننده قوی', 'ضد لک', 'جوان سازی'],
    suitableFor: ['normal', 'oily', 'combination']
  },
  { 
    id: 3,
    name: "سولو سرم نیاسینامید 10%",
    price: "935,000",
    image: soloNi10,
    rating: 4.9,
    benefits: ['کنترل چربی', 'کوچک کننده منافذ', 'ضد التهاب'],
    suitableFor: ['oily', 'combination', 'acne']
  },
  {
    id: 4,
    name: "سولو سرم نیاسینامید 5%",
    price: "714,000",
    image: soloNi5,
    rating: 4.7,
    benefits: ['کنترل چربی ملایم', 'تعادل پوست', 'ضد التهاب'],
    suitableFor: ['sensitive', 'normal', 'combination']
  }
];

export default Product;