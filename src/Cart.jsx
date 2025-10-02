import React, { useState } from "react";

function Cart({ cart, removeFromCart, addToCart }) {
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredCart = categoryFilter === "all" ? cart : cart.filter(item => item.category === categoryFilter);

  const total = filteredCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Get unique categories from cart items that have at least one item in filteredCart
  const categories = Array.from(new Set(filteredCart.map(item => item.category)));

  return (
    <div className="cart" style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>Cart Items</h2>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="categoryFilter" style={{ marginRight: "10px", fontWeight: "600" }}>Filter by Category:</label>
        <select
          id="categoryFilter"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
        >
          <option value="all">All</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {filteredCart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {filteredCart.map((item, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                  backgroundColor: "#fff",
                  padding: "15px",
                  borderRadius: "10px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                }}
              >
                <img
                  src={item.thumbnail || "https://via.placeholder.com/100x100?text=No+Image"}
                  alt={item.title}
                  style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "8px", marginRight: "20px" }}
                />
                <div style={{ flexGrow: 1 }}>
                  <h3 style={{ margin: "0 0 5px", fontWeight: "700" }}>{item.title}</h3>
                  <p style={{ margin: "0 0 5px", color: "#666", fontSize: "0.9rem" }}>
                    {/* Assuming brand is available in item.brand */}
                    {item.brand ? item.brand : "Brand Unknown"} &bull; {item.category}
                  </p>
                  <p style={{ margin: "0 0 5px", fontWeight: "700", fontSize: "1.1rem" }}>
                    ₱{(item.price).toFixed(2)}
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      background: "#f0f0f0",
                      border: "none",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontWeight: "700",
                      fontSize: "1.2rem",
                      marginRight: "10px",
                      userSelect: "none"
                    }}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span style={{ fontWeight: "700", fontSize: "1.1rem", margin: "0 10px" }}>{item.quantity}</span>
                  <button
                    onClick={() => addToCart(item)}
                    style={{
                      background: "#f0f0f0",
                      border: "none",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontWeight: "700",
                      fontSize: "1.2rem",
                      marginLeft: "10px",
                      userSelect: "none"
                    }}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <p style={{ fontWeight: "700", fontSize: "1.1rem", marginLeft: "20px", minWidth: "100px", textAlign: "right" }}>
                  ₱{(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#e91e63",
                    cursor: "pointer",
                    fontSize: "1.5rem",
                    marginLeft: "15px"
                  }}
                  aria-label="Remove item"
                  title="Remove item"
                >
                  🗑️
                </button>
              </li>
            ))}
          </ul>
          <h3 style={{ fontWeight: "700", fontSize: "1.2rem", textAlign: "right" }}>Total: ₱{total.toFixed(2)}</h3>
          <button
            onClick={() => {
              alert("Successfully checked out");
            }}
            style={{
              marginTop: "20px",
              background: "#2196f3",
              color: "#fff",
              border: "none",
              padding: "12px 20px",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "700",
              fontSize: "1rem",
              transition: "background-color 0.3s ease",
              float: "right"
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = "#1976d2"}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = "#2196f3"}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
