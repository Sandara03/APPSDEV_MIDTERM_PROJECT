import React from "react";
import { Link } from "react-router-dom";

function Header({ cartCount }) {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        background: "#f8f8f8",
        borderBottom: "1px solid #ddd",
      }}
    >
      {/* Logo */}
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="https://scontent.fceb2-2.fna.fbcdn.net/v/t1.15752-9/552646695_1972331853541649_1272914159622731201_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHKM5jxrTSG1KfInm36gxp0qKl75NqGUGSoqXvk2oZQZEWDt1F0G18ED0czgYfnZlk9YCb_UFRX4Lq4e2DdhuP5&_nc_ohc=HJccbBTwi5YQ7kNvwHnx2tG&_nc_oc=AdmSKloNljsH8VizexZ698Z0Lc5n2MXEz9zffWdnassRXRTjXuSqXmkpNkUFZRPUr7c&_nc_zt=23&_nc_ht=scontent.fceb2-2.fna&oh=03_Q7cD3gHTpZqrMmYrOSh5asNEwjPQ6sfz82zzMHoh4H46-rz5UA&oe=6905C43F" alt="Trendy Treasures Logo" style={{ height: "50px", marginRight: "10px" }} />
          <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>Trendy Treasures</h1>
        </div>
      </Link>

      {/* Navigation */}
      <nav>
        <Link to="/" style={{ margin: "0 15px" }}>Home</Link>
        <Link to="/cart" style={{ margin: "0 15px" }}>
          🛒 Cart ({cartCount})
        </Link>
      </nav>
    </header>
  );
}

export default Header;
