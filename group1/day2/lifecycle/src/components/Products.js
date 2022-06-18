import React, { useState } from "react";
import { useEffect } from "react";

const products = [
  {
    id: 1,
    title: "Macbook PRO",
    price: 1000,
  },
  {
    id: 2,
    title: "Microphone",
    price: 100,
  },
  {
    id: 3,
    title: "HDMI Cable",
    price: 1,
  },
  {
    id: 4,
    title: "Book",
    price: 10,
  },
];

function Products({ money }) {
  const [buyProducts, setBuyProducts] = useState([]);

  useEffect(() => {
    setBuyProducts(products.filter((item) => item.price <= money));
  }, [money]);

  return (
    <div className="products">
      <div>
        {products.map((item, i) => (
          <div key={item.id}>
            {i + 1}. {item.title}
          </div>
        ))}
      </div>
      <div>
        {buyProducts.map((item, i) => (
          <div key={item.id}>
            {i + 1}. {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
