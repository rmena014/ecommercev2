import React from "react";
import "./Contact.css";
import Logo from "../assets/images/armadaLogoTransparent copy.webp";
import { Link } from "react-router-dom";
import RegNav from "../components/RegNav";

function ContactPage() {
  return (
    <div>
      <div className="logo">
        <Link to="/">
          <img className="armada_logo" src={Logo} alt="Armada Logo" />
        </Link>
      </div>
      <RegNav />
      <main>
        <div className="container">
          <div className="contactBox">
            <div className="left"></div>
            <div className="right">
              <h2>Armada Work Wear</h2>
              <form>
                <input
                  type="text"
                  className="field"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  className="field"
                  placeholder="Your Email"
                  required
                />
                <input
                  type="tel"
                  className="field"
                  placeholder="Your Phone"
                  required
                />
                <textarea
                  className="field"
                  placeholder="Message..."
                  rows="7"
                ></textarea>
                <button className="submitBttn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ContactPage;
