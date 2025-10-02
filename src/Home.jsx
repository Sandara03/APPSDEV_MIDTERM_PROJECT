import React, { useEffect, useState } from "react";
import ProductList from "./Components/ProductList";
import SearchFilter from "./Components/searchFilter";

function Home({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const customProducts = [
          // Beauty Products (10 items)
          {
          id: 9999,
            title: "Hydrating Beauty Cream",
          description: "A moisturizing cream that hydrates and nourishes your skin.",
          price: 29.99,
            category: "beauty",
          thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=180&q=80"
          },
          {
            id: 10006,
            title: "Matte Lipstick Set",
            description: "Long-lasting matte lipstick in 6 beautiful shades.",
            price: 24.99,
            category: "beauty",
            thumbnail: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=180&q=80"
          },
          {
            id: 10007,
            title: "Anti-Aging Serum",
            description: "Vitamin C serum that reduces fine lines and brightens skin.",
            price: 45.99,
            category: "beauty",
            thumbnail: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=180&q=80"
          },
          {
            id: 10008,
            title: "Professional Makeup Brush Set",
            description: "Complete 12-piece makeup brush set for professional results.",
            price: 34.99,
            category: "beauty",
            thumbnail: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=180&q=80"
          },
          {
            id: 10027,
            title: "Eyeshadow Palette",
            description: "35-shade eyeshadow palette with vibrant and neutral colors.",
            price: 39.99,
            category: "beauty",
            thumbnail: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=180&q=80"
          },
          {
            id: 10028,
            title: "Foundation Primer",
            description: "Silky smooth primer for flawless makeup application.",
            price: 22.99,
            category: "beauty",
            thumbnail: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?auto=format&fit=crop&w=180&q=80"
          },
          {
            id: 10029,
            title: "Waterproof Mascara",
            description: "Long-lasting waterproof mascara for dramatic lashes.",
            price: 18.99,
            category: "beauty",
            thumbnail: "https://images.unsplash.com/photo-1631214540857-9623cb0c8c7c?auto=format&fit=crop&w=180&q=80"
          },
          {
            id: 10030,
            title: "Face Cleanser",
            description: "Gentle foam cleanser for all skin types.",
            price: 16.99,
            category: "beauty",
            thumbnail: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=180&q=80"
          },
          {
            id: 10031,
            title: "Night Recovery Cream",
            description: "Intensive night cream for skin repair and renewal.",
            price: 52.99,
            category: "beauty",
            thumbnail: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=180&q=80"
          },
          {
            id: 10032,
            title: "Concealer Palette",
            description: "Multi-shade concealer palette for perfect coverage.",
            price: 26.99,
            category: "beauty",
            thumbnail: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=180&q=80"
          },
          
          // Women's Bags
          {
            id: 10000,
            title: "Elegant Leather Handbag",
            description: "A stylish women's leather handbag perfect for everyday use.",
            price: 89.99,
            category: "women's bags",
            thumbnail: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=180&q=80"
          },
          {
            id: 10009,
            title: "Designer Tote Bag",
            description: "Spacious designer tote bag perfect for work or travel.",
            price: 125.99,
            category: "women's bags",
            thumbnail: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=180&q=80"
          },
          {
            id: 10010,
            title: "Evening Clutch",
            description: "Elegant evening clutch with gold chain for special occasions.",
            price: 49.99,
            category: "women's bags",
            thumbnail: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=180&q=80"
          },
          {
            id: 10011,
            title: "Crossbody Messenger Bag",
            description: "Comfortable crossbody bag perfect for daily adventures.",
            price: 65.99,
            category: "women's bags",
            thumbnail: "https://images.unsplash.com/photo-1553735300-20094f8e3bb9?auto=format&fit=crop&w=180&q=80"
          },
          
          // Watches
          {
            id: 10001,
            title: "Classic Gold Watch",
            description: "A timeless gold watch with premium craftsmanship.",
            price: 199.99,
            category: "watches",
            thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=180&q=80"
          },
          {
            id: 10012,
            title: "Sport Digital Watch",
            description: "Water-resistant digital watch perfect for active lifestyle.",
            price: 45.99,
            category: "watches",
            thumbnail: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=180&q=80"
          },
          {
            id: 10013,
            title: "Elegant Silver Watch",
            description: "Sophisticated silver watch with diamond accents.",
            price: 159.99,
            category: "watches",
            thumbnail: "https://images.unsplash.com/photo-1509048191080-d2e2fb6a0d7b?auto=format&fit=crop&w=180&q=80"
          },
          {
            id: 10014,
            title: "Vintage Leather Watch",
            description: "Classic vintage-style watch with genuine leather strap.",
            price: 89.99,
            category: "watches",
            thumbnail: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=180&q=80"
          },
          
          // Jewelry
          {
            id: 10002,
            title: "Diamond Stud Earrings",
            description: "Beautiful diamond stud earrings for special occasions.",
            price: 149.99,
            category: "jewelry",
            thumbnail: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=180&q=80"
          },
          {
            id: 10015,
            title: "Pearl Necklace",
            description: "Elegant freshwater pearl necklace, perfect for any occasion.",
            price: 89.99,
            category: "jewelry",
            thumbnail: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=180&q=80"
          },
          {
            id: 10016,
            title: "Gold Chain Bracelet",
            description: "Delicate 14k gold chain bracelet with heart charm.",
            price: 75.99,
            category: "jewelry",
            thumbnail: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=180&q=80"
          },
          {
            id: 10017,
            title: "Statement Ring Set",
            description: "Set of 3 adjustable statement rings in rose gold.",
            price: 34.99,
            category: "jewelry",
            thumbnail: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=180&q=80"
          },
          
          // Tops
          {
            id: 10003,
            title: "Cotton Casual Top",
            description: "Comfortable cotton top perfect for casual wear.",
            price: 24.99,
            category: "tops",
            thumbnail: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=180&q=80"
          },
          {
            id: 10018,
            title: "Silk Blouse",
            description: "Elegant silk blouse perfect for office or evening wear.",
            price: 59.99,
            category: "tops",
            thumbnail: "https://images.unsplash.com/photo-1564584217132-2271339ff2de?auto=format&fit=crop&w=180&q=80"
          },
          {
            id: 10019,
            title: "Crop Sweater",
            description: "Cozy knit crop sweater in soft pastel colors.",
            price: 39.99,
            category: "tops",
            thumbnail: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=180&q=80"
          },
          {
            id: 10020,
            title: "Graphic T-Shirt",
            description: "Trendy graphic t-shirt with vintage-inspired design.",
            price: 19.99,
            category: "tops",
            thumbnail: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=180&q=80"
          },
          
          // Sunglasses
          {
            id: 10004,
            title: "Stylish Sunglasses",
            description: "UV protection sunglasses with a modern design.",
            price: 39.99,
            category: "sunglasses",
            thumbnail: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=180&q=80"
          },
          {
            id: 10021,
            title: "Aviator Sunglasses",
            description: "Classic aviator sunglasses with gold frames.",
            price: 55.99,
            category: "sunglasses",
            thumbnail: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=180&q=80"
          },
          {
            id: 10022,
            title: "Cat Eye Sunglasses",
            description: "Retro cat eye sunglasses perfect for a vintage look.",
            price: 42.99,
            category: "sunglasses",
            thumbnail: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=180&q=80"
          },
          {
            id: 10023,
            title: "Oversized Sunglasses",
            description: "Glamorous oversized sunglasses with gradient lenses.",
            price: 48.99,
            category: "sunglasses",
            thumbnail: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=180&q=80"
          },
          
          // Shoes
          {
            id: 10005,
            title: "Running Sneakers",
            description: "Comfortable running shoes for athletic activities.",
            price: 79.99,
            category: "shoes",
            thumbnail: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=180&q=80"
          },
          {
            id: 10024,
            title: "High Heel Pumps",
            description: "Elegant black pumps perfect for professional or formal wear.",
            price: 89.99,
            category: "shoes",
            thumbnail: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=180&q=80"
          },
          {
            id: 10025,
            title: "Casual Flats",
            description: "Comfortable ballet flats for everyday wear.",
            price: 45.99,
            category: "shoes",
            thumbnail: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=180&q=80"
          },
          {
            id: 10026,
            title: "Ankle Boots",
            description: "Stylish ankle boots with block heel for versatile styling.",
            price: 99.99,
            category: "shoes",
            thumbnail: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=180&q=80"
          }
        ];
        setProducts([...data.products, ...customProducts]);
      });
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        const customCategories = [
          "beauty",
          "women's bags", 
          "watches",
          "jewelry",
          "tops",
          "sunglasses",
          "shoes"
        ];
        // Combine dummyjson categories with custom categories, removing duplicates
        const allCategories = [...new Set([...data, ...customCategories])];
        setCategories(allCategories);
      });
  }, []);

  let filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (category !== "all") {
    filteredProducts = filteredProducts.filter((p) => p.category === category);
  }

  if (sort === "low-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sort === "high-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  // Pagination calculations
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page) => {
    if (page < 1) page = 1;
    else if (page > totalPages) page = totalPages;
    setCurrentPage(page);
  };

  return (
    <div className="home">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
        category={category}
        setCategory={setCategory}
        categories={categories}
      />
      <ProductList products={currentProducts} addToCart={addToCart} />
      <div style={{ 
        marginTop: "30px", 
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px"
      }}>
        <button 
          onClick={() => goToPage(currentPage - 1)} 
          disabled={currentPage === 1}
          style={{
            padding: "12px 24px",
            fontSize: "14px",
            fontWeight: "600",
            border: "2px solid #e3e3e3",
            borderRadius: "25px",
            backgroundColor: currentPage === 1 ? "#f5f5f5" : "#ffffff",
            color: currentPage === 1 ? "#a0a0a0" : "#333333",
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
            transition: "all 0.3s ease",
            boxShadow: currentPage === 1 ? "none" : "0 2px 8px rgba(0,0,0,0.1)",
            textTransform: "uppercase",
            letterSpacing: "0.5px"
          }}
          onMouseEnter={(e) => {
            if (currentPage !== 1) {
              e.target.style.backgroundColor = "#fce4ec";
              e.target.style.borderColor = "#e91e63";
              e.target.style.color = "#e91e63";
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 4px 12px rgba(233,30,99,0.3)";
            }
          }}
          onMouseLeave={(e) => {
            if (currentPage !== 1) {
              e.target.style.backgroundColor = "#ffffff";
              e.target.style.borderColor = "#e3e3e3";
              e.target.style.color = "#333333";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
            }
          }}
        >
          ← Previous
        </button>
        
        <div style={{ 
          padding: "12px 20px",
          fontSize: "16px",
          fontWeight: "600",
          backgroundColor: "#e91e63",
          color: "white",
          borderRadius: "20px",
          minWidth: "120px",
          boxShadow: "0 3px 10px rgba(233,30,99,0.3)",
          background: "linear-gradient(135deg, #f06292 0%, #e91e63 100%)"
        }}>
          {currentPage} of {totalPages}
        </div>
        
        <button 
          onClick={() => goToPage(currentPage + 1)} 
          disabled={currentPage === totalPages}
          style={{
            padding: "12px 24px",
            fontSize: "14px",
            fontWeight: "600",
            border: "2px solid #e3e3e3",
            borderRadius: "25px",
            backgroundColor: currentPage === totalPages ? "#f5f5f5" : "#ffffff",
            color: currentPage === totalPages ? "#a0a0a0" : "#333333",
            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
            transition: "all 0.3s ease",
            boxShadow: currentPage === totalPages ? "none" : "0 2px 8px rgba(0,0,0,0.1)",
            textTransform: "uppercase",
            letterSpacing: "0.5px"
          }}
          onMouseEnter={(e) => {
            if (currentPage !== totalPages) {
              e.target.style.backgroundColor = "#f8f9fa";
              e.target.style.borderColor = "#e2127aff";
              e.target.style.color = "#007bff";
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 4px 12px rgba(0,123,255,0.3)";
            }
          }}
          onMouseLeave={(e) => {
            if (currentPage !== totalPages) {
              e.target.style.backgroundColor = "#ffffff";
              e.target.style.borderColor = "#e3e3e3";
              e.target.style.color = "#333333";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
            }
          }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}

export default Home;
