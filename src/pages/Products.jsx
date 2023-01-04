import React, { useEffect, useState } from "react";
import "./Products.css";
import Logo from "../assets/images/armadaLogoTransparent copy.webp";
import { Link } from "react-router-dom";
import RegNav from "../components/RegNav";
import axios from "axios";

function Products() {
  useEffect(() => {
    getProducts();
  }, []);
  const [products, setProducts] = useState([]);

  const getProducts = (category) => {
    const url = category
      ? `https://ec2-44-204-54-44.compute-1.amazonaws.com/api/filtered${category}`
      : "https://ec2-44-204-54-44.compute-1.amazonaws.com/api/allProducts";
    axios
      .get(url, {})
      .then((response) => {
        console.log(response.data);
        console.log(category);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="logo">
        <Link to="/">
          <img className="armada_logo" src={Logo} alt="Armada Logo" />
        </Link>
      </div>
      <RegNav />
      <div>
        <div className="filter_btns">
          <button className="all_btn" onClick={() => getProducts()}>
            All
          </button>
          <button className="tops_btn" onClick={() => getProducts("tops")}>
            Tops
          </button>
          <button
            className="bottoms_btn"
            onClick={() => getProducts("bottoms")}
          >
            Bottoms
          </button>
          <button
            className="accessory_btn"
            onClick={() => getProducts("accessories")}
          >
            Accessories
          </button>
          <button className="shoes_btn" onClick={() => getProducts("shoes")}>
            Shoes
          </button>
        </div>

        {products.map((products) => (
          <div key={products.id}>
            <div className="product_card">
              <img src={products.image} alt="Product" />
              <div className="productInfo">
                <h1>{products.productName}</h1>
                <h3>${products.price}</h3>
                <p>{products.description}</p>
                <button className="add-to-cart-button">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
