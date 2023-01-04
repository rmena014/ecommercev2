import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Logo from "../assets/images/armadaLogoTransparent copy.webp";
import alternateLogo from "../assets/images/armadaWWVintageTransparent.webp";
import RegNav from "../components/RegNav";
import ImageSlider from "../components/ImageSlider";

function Home() {
  return (
    <div className="home">
      <div className="logo">
        <Link to="/">
          <img className="armada_logo" src={Logo} alt="Armada Logo" />
        </Link>
      </div>

      <RegNav />
      <ImageSlider
        images={[
          "/images/courdroySliderImage copy.webp",
          "/images/knitwearSliderImage.webp",
          "/images/footwearSliderImage.webp",
        ]}
      />

      <section className="brand_info">
        <div className="brand_vintage_img">
          <img src={alternateLogo} alt="Armada Alternate Logo" />
        </div>
        <div className="info_heading">
          <h2>The history of Armada™:</h2>
        </div>
        <p>
          Founded in 2022, Armada has been a leading force in the work wear
          industry for good reason. What began with a pair of brothers in New
          York City has now become a multifaceted company providing people
          everywhere great quality clothing. Created with the idea of utility
          and aesthetics in mind, Armada has been curating and designing pieces
          fit for any and all individuals, worker or not.
        </p>
        <div className="info_heading">
          <h2>Our vision:</h2>
        </div>
        <p>
          Armada work wear is a company for workers made by workers with the
          goal of creating high quality pieces which offer maximum comfort
          without diminishing style. We strive to build strong relationships
          with our consumers and our vision is to continue making an imprint in
          the world of work wear and fashion in general.
        </p>
        <div className="shopNowbttn">
          <Link to="/products">
            <button className="shopbttn" type="button">
              Catalog
            </button>
          </Link>
        </div>
      </section>
      <div className="vintage_img2">
        <img src={alternateLogo} alt="Armada Alternate Logo" />
      </div>
    </div>
  );
}

export default Home;
