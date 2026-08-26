import products, {ProductCard }from './ProductCart';
import './App.css';
import { useState } from 'react';

function App(){
  const [searchTerm, setSearchTerm] = useState('');
  const[cart, setCart] = useState([]);
  
  function handleAddToCart(product) {
    setCart([...cart, product]);
  }

  const filteredProducts = products.filter((products) =>
  products.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return(
<div className="app">
<header>
  <h1>Jasper Store 🛒 ({cart.length}) </h1>
  <p> Quality tech, fashion, and accessories-curated for you.</p>
</header>

<input 
type="text" 
placeholder= "Search products..."
value={searchTerm}
onChange={(e) => setSearchTerm(e.target.value)}
className= "search-bar"

/>

<div className= "product-grid">
{filteredProducts.map((product) => (
  <ProductCard
  key={product.id}
  name={product.name}
  price={product.price}
  image={product.image}
  category={product.category}
  rating={product.rating}
  description={product.description}
  onAddToCart={() => handleAddToCart(product)}
  />

))}
</div>
</div>

 
  );
}


export default App;