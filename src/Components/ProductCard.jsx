import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "10px",
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%"
      }}
    >
      <img
        src={product.thumbnail || "https://via.placeholder.com/180x180?text=No+Image"}
        alt={product.title}
        style={{ width: "100%", height: "180px", objectFit: "contain", borderRadius: "8px", marginBottom: "15px" }}
      />
      <h3 style={{ fontSize: "1.3rem", margin: "10px 0 5px", color: "#222", fontWeight: "600" }}>{product.title}</h3>
      <p style={{ color: "#555", fontSize: "1rem", marginBottom: "10px", minHeight: "40px" }}>{product.description.slice(0, 60)}...</p>
      <p style={{ fontWeight: "700", color: "#e91e63", fontSize: "1.1rem", marginBottom: "15px" }}>${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        style={{
          marginTop: "20px",
          background: "#e91e63",
          color: "#fff",
          border: "none",
          padding: "12px 20px",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "700",
          fontSize: "1rem",
          transition: "background-color 0.3s ease"
        }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = "#c2185b"}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = "#e91e63"}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
