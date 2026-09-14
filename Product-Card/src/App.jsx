import  { products, ProductCard }from './ProductCart';
import './App.css';
import { useState, useEffect } from 'react';

function App(){
  const [searchTerm, setSearchTerm] = useState ('');
  const[cart, setCart] = useState([]);
 

  useEffect(() => {
    const savedCart = localStorage.getItem('jasperCart'); 
    if (savedCart) {
      setCart(JSON.parse(savedCart)); 
    }
  }, []);


  useEffect(()=> {
    localStorage.setItem('jasperCart', JSON.stringify(cart));
  }, [cart]);
  
 const [showCart, setShowCart] = useState(false);
  function handleAddToCart(product) {
    setCart([...cart, product]);
  }

  function handleRemoveFromCart(indexToRemove) {
    setCart(cart.filter((item, index)=> index !== indexToRemove));
  }

  const filteredProducts = products.filter((product) =>
  product?.name?.toLowerCase().includes(searchTerm.toLowerCase())
);

  const cartTotal = cart.reduce((total, item)=> total + item.price, 0);
  return(
<div className="app"> 
{showCart ? (
  <div className='cart-page'>
    <h1 onClick={() =>setShowCart(false)} style={{cursor:'pointer'}}>
  ⬅Back to Store

    </h1>
    <h2>Your Order</h2>
    
    {cart.length === 0 ? (
      <p>Your Cart is empty. </p>
    ):(
      cart.map((item, index) => (
        <div key={index} className='cart-item'>
          <img src={item.image} alt={item.name } width={60}/>
       <div>
        <p>{item.name}</p>
        <p>{item.price}</p>
       </div>
       <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
        </div>
        
      ))
    )}

     {cart.length > 0 && (
        <h3 className='cart-total'>Total: ${cartTotal.toFixed(2)}</h3>
      )}
    </div>


):(
<>
<header>
  <h1 onClick={() => setShowCart(true)} style={{cursor: 'pointer'}}>
    Jasper Store 🛒 ({cart.length}) </h1>
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

</>
)}

</div>
)};
export default App;
