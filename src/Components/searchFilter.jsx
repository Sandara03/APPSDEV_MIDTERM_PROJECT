import React from "react";

function SearchFilter({ search, setSearch, sort, setSort, category, setCategory, categories }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "15px",
        marginBottom: "20px"
      }}
    >
      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          flex: "1",
          border: "1px solid #ddd",
          borderRadius: "5px"
        }}
      />

      {/* Sort */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        style={{
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "5px"
        }}
      >
        <option value="">Sort by</option>
        <option value="low-high">Price: Low to High</option>
        <option value="high-low">Price: High to Low</option>
      </select>

      {/* Category */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "5px"
        }}
      >
        <option value="all">All Categories</option>
        {categories.map((cat, index) => {
          if (typeof cat === 'string') {
            return (
              <option key={index} value={cat}>
                {cat}
              </option>
            );
          } else if (typeof cat === 'object' && cat !== null) {
            return (
              <option key={index} value={cat.slug || cat.name || ''}>
                {cat.name || cat.slug || ''}
              </option>
            );
          } else {
            return null;
          }
        })}
      </select>
    </div>
  );
}

export default SearchFilter;