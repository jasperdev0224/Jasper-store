import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
 import image3 from './assets/image3.jpg';
import image4 from   './assets/image4.jpg';
import image5 from   './assets/image5.jpg';

export const products = [
  {
      id: 1,
      name: "Wireless Headphones",
      price: 69.99,
      image: image1, 
      category: "Electronics",
      rating: 4.5,
      description: "Noise-cancelling over-ear headphones."
  },
    
     {
      id: 2,
      name: "Smart Watch",
      price: 126.99,
      image: image2,
      category: "Electronics",
      rating: 4.4,
      description: "Track fitness, sleep, and notification."
  },

{ 
      id: 3,
      name: "Running Shoes",
      price: 89.99,
      image: image3,
      category: "Fashion",
      rating: 4.6,
      description: "lightweight shoes built for daily runs."
  },
    
     {
      id: 4,
      name: "Backpack",
      price: 136.99,
      image: image4,
      category: "Accessories",
      rating: 4.3,
      description: "Durable backpack with laptop compartment."
  },


{
      id: 5,
      name: "Bluetooth Speaker",
      price: 39.99,
      image: image5,
      category: "Electronics",
      rating: 4.5,
      description: "Portable speaker with 12-hour battery life."
  }
];

export function  ProductCard ({name, image, price, category, rating, description, onAddToCart}) {
  console.log("onAddToCart is:", onAddToCart);
return(
<div className="product-card">
  <br />
  
  <h3>{name}</h3>
  <img src={image} alt={name} />
  
  <p className="category">{category}</p>
<p className="price">${price}</p>
<p className="rating">⭐{rating}</p>
<p className="description">{description}</p>

<button onClick={onAddToCart}>Add to Cart </button>

</div>
);
}


export default products;