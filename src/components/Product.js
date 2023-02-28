import react from "react";

export default function Product(p) {
  const { product, onAdd } = p;
  return (
    <div>
      <img className="small" src={product.image} alt={product.name}></img>
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add to cart</button>
      </div>
    </div>
  );
}
