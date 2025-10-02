import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, addToCart }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "30px",
        marginTop: "20px"
      }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;