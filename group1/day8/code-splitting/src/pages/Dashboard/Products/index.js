import axios from "axios";
import React, { useEffect, useState } from "react";

const API_ENDPOINT = "https://dummyjson.com/products";
const limit = 10;

function Products() {
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const skip = page * limit;

    axios(`${API_ENDPOINT}/?limit=${limit}&skip=${skip}`).then((res) => {
      const { products } = res.data;

      setProducts(products);
    });
  }, [page]);

  return (
    <div>
      <h2>Ürünler</h2>

      {products &&
        products.map((product) => <div key={product.id}>{product.title}</div>)}

      <div className="pagination">
        {new Array(10).fill().map((item, i) => (
          <button key={i} disabled={i === page} onClick={() => setPage(i)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Products;
