

function  ProductCard ({name, image, price, category, rating, description}) {
return(
<div className="product-card">
  <br />
  
  <h3>{name}</h3>
  <img src={image} alt="name" width={50} />
  
  <p className="category">{category}</p>
<p className="price">${price}</p>
<p className="rating">⭐{rating}</p>
<p className="description">{description}</p>

<button>Add to Cart </button>

</div>
);
}


export default ProductCard;