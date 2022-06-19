import React from "react";

const products = [
  {
    id: 1,
    title: "iPhone 9",
    price: 549,
  },
  {
    id: 2,
    title: "Samsung Universe 9",
    price: 1249,
  },
  {
    id: 3,
    title: "Huawei P30",
    price: 499,
  },
  {
    id: 4,
    title: "MacBook Pro",
    price: 1749,
  },
  {
    id: 5,
    title: "Microsoft Surface Laptop 4",
    price: 1499,
  },
];

function Products({ money }) {
  return (
    <div>
      <h3>Tümü</h3>
      {products
        .sort((a, b) => a.price - b.price)
        .map((product) => (
          <div
            key={product.id}
            className="list-item"
            style={{ color: product.price <= money ? "green" : "black" }}
          >
            {product.title} - <span className="price">{product.price}$</span>
          </div>
        ))}
    </div>
  );
}

export default Products;
