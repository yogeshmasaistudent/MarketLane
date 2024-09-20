import React, { useEffect, useState } from "react";
import "./ProductList.css"
function ProductList() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  //    Fetch Data

  const fetchData = async (page) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products?limit=8&page=${page}`
      );
      const data = await res.json();
      setProduct((Prevproduct) => [...Prevproduct, ...data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  return (
    <div className="container">
      <div className="card-container">
        {product.map((ele) => (
          <div className="card">
            <img src={ele.image} width="200px"/>
             <div className="card-body">{ele.title}</div>
          </div>
        ))}
      </div>

      {/* Button */}
      <button onClick={() => setPage(page + 1)}>See More</button>
    </div>
  );
}

export default ProductList;
