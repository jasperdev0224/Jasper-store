import ProductCard from './ProductCart';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
function App(){
  return(
<div className="app">
<header>
  <h1>Jasper Store 🛒</h1>
  <p> Quality tech, fashion, and accessories-curated for you.</p>
</header>

<div className= "product-grid">

  <ProductCard
  name= "Wireless Headphones"
  price= {69.99}
  image={image1}
  category="Electronics"
  rating={4.5}
  description="Noise-cancelling over-ear headphones."
  />

  <ProductCard
  name= "Smart Watch"
  price= {136.99}
  image={image2}
  category="Electronics"
  rating={4.4}
  description="Track fitness, sleep, and notification."
  />

</div>
</div>
  );
}


export default App;