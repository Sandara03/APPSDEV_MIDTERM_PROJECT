import React from "react";

function Cart({ cart, removeFromCart }) {
  // calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px", color: "#ff4da6" }}>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p style={{ color: "#666" }}>Your cart is empty.</p>
      ) : (
        <div>
          {/* List of cart items */}
          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #ddd",
                padding: "10px 0"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px" }}
                />
                <div>
                  <h4 style={{ margin: "0", color: "#333" }}>{item.title}</h4>
                  <p style={{ margin: "5px 0", color: "#ff4da6", fontWeight: "bold" }}>
                    ${item.price}
                  </p>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  background: "#ff4da6",
                  color: "#fff",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total Price */}
          <h3 style={{ marginTop: "20px", color: "#333" }}>
            Total: <span style={{ color: "#ff4da6" }}>${totalPrice.toFixed(2)}</span>
          </h3>

          {/* Checkout Button */}
          <button
            style={{
              marginTop: "15px",
              background: "#ff4da6",
              color: "#fff",
              border: "none",
              padding: "12px 20px",
              borderRadius: "5px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
            onClick={() => alert("Thank you for shopping at Trendy Treasures! 💖")}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;