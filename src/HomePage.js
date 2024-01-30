import React, { useState, useEffect } from "react";
import "./HomePage.css";
import useFetch from "./useFetch";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalContent, setTotalContent] = useState(4);

  // const apiUrl = "https://fakestoreapi.com/products/";
  const apiUrl = "https://dummyjson.com/products/";
  const { data: productData, error } = useFetch(apiUrl);

  useEffect(() => {
    if (productData) {
      setTotalContent(productData.length);
    }

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % totalContent) + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [productData, totalContent]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide % totalContent) + 1);
    console.log(currentSlide);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + totalContent) % totalContent
    );
    console.log(currentSlide);
  };

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="p-0 m-0" id="Page1">

      <div className="slider-container m-0">
        <button className="nav-button" onClick={prevSlide}>
          &lt; Prev
        </button>
        {productData &&
          productData
            .filter((data) => data.id === currentSlide)
            .map((data) => (
              <div
                className="row row-cols-1 row-cols-sm-2 text-white p-1 p-md-5"
                id="slidePage"
                key={data.id}
              >
                <div className="col d-flex justify-content-center align-items-center p-3">
                  <img
                    src={data.images[0]}
                    alt={data.id}
                    height={"100px"}
                    width={"100px"}
                    className="img-fluid"
                  />
                </div>
                <div className="col d-flex flex-column gap-3 justify-content-center p-5 ">
                  <h3 className="slideTitle">{data.title}</h3>
                  <p className="slidePara">{data.description}</p>
                  <h5>${data.price}</h5>
                </div>
              </div>
            ))}
        <button className="nav-button" onClick={nextSlide}>
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default HomePage;
