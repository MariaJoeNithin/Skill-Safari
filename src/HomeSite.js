import React, { useState, useEffect } from "react";
import useFetch from "./useFetch";
import "./HomeSite.css";

const HomeSite = () => {
  const [productData, setData] = useState([]);
  const [totalProduct, setProduct] = useState(8);

  // const apiUrl = "https://fakestoreapi.com/products/";

  const apiUrl = "https://dummyjson.com/products/";
  const { data: fetchedData, error } = useFetch(apiUrl);

  useEffect(() => {
    if (fetchedData) {
      setData(fetchedData);
      // setProduct(fetchedData.length);
    }
  }, [fetchedData]);

  const loadMoreData = () => {
    if (totalProduct < productData.length) {
      setProduct(totalProduct + 8);
    } else {
      setProduct(productData.length);
    }
  };
  const loadLess = () => {
    setProduct(8);
  };

  function addToCartHandler(data) {
    alert(`Adding ${data.title} to cart`);
  }

  function detailsHandler(data) {
    alert(`details?id=${data.id}`);
  }

  return (
    <>
      <div className="container-fluid" id="Productpage">
        <div className="container-fluid">
          {/* <h1>Welcome `${user}`</h1> */}

          <h3 className="h3 p-3 text-white">Our Products</h3>
          <div className="row row-cols-1 row-cols-md-3 gap-3" id="pg1">
            {productData
              .filter((data) => data.id <= totalProduct)
              .map((data) => (
                <div
                  className="col card ProductCard shadow border border-0 pt-2"
                  id=""
                  style={{ maxWidth: "400px" }}
                  key={data.id}
                >
                  <img src={data.images[0]} alt={data.id} className="pd-Img" />
                  <h3 className="productTitle">{data.title}</h3>
                  {/* <p className="para">{data.description}</p> */}
                  <h5>${data.price}</h5>
                  <div className="d-flex p-2">
                    <button
                      className="btn btn-success col me-1"
                      onClick={() => addToCartHandler(data)}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="btn btn-primary col ms-1"
                      onClick={() => detailsHandler(data)}
                    >
                      Details
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <div className="d-flex justify-content-center align-items-center p-3">
            <button
              className={`btn ${
                totalProduct >= productData.length
                  ? "btn-primary"
                  : "btn-success"
              }`}
              onClick={
                totalProduct >= productData.length ? loadLess : loadMoreData
              }
            >
              {`${
                totalProduct >= productData.length ? "Show Less" : "Load More"
              }`}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSite;
