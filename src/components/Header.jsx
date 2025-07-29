import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="m-0 p-0 overflow-hidden">
      <div
        className="header-bottom home2-header-bottom"
        style={{ backgroundColor: "#FFFAEC" }}
      >
        <div className="container">

          {/* Mobile Top Bar */}
          <div className="d-flex justify-content-between align-items-center py-2 d-lg-none">
            <Link to="/">
              <img
                src="/assets/TFC_LOGO_jpeg-01-removebg-preview.png"
                alt="Logo"
                style={{ height: "80px", width: "80px" }}
              />
            </Link>

            <button
              className="mobile-menu-toggle border-0 bg-transparent"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <i className="fas fa-bars fa-2x text-dark"></i>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div
            className="row justify-content-center align-items-center d-none d-lg-flex"
            style={{ height: "15vh" }}
          >
            <div className="col-lg-12" style={{marginTop: "-20px"}}>
              <nav id="main-menu">
                <ul className="main-menu d-flex justify-content-center align-items-center gap-4 text-uppercase list-unstyled mb-0" style={{ height: "100%" }}>
                  {[
                    { id: "reviews", label: "Reviews" },
                    { id: "our-story", label: "Our Story" },
                    { id: "ambience", label: "Ambience" },
                  ].map((item) => (
                    <li key={item.id} className="d-flex align-items-center">
                      <a href={`#${item.id}`} className="text-dark text-decoration-none">
                        {item.label}
                      </a>
                    </li>
                  ))}

                  {/* Center Logo */}
                  <li className="logo d-flex justify-content-center align-items-center px-2">
                    <Link to="/">
                      <img
                        src="/assets/TFC_LOGO_jpeg-01-removebg-preview.png"
                        alt="Logo"
                        style={{
                          height: "13vh",
                          width: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </Link>
                  </li>

                  {[
                    { id: "specialities", label: "Specialities" },
                    { id: "about-us", label: "About Us" },
                    { id: "dishes", label: "Dishes" },
                    { id: "franchise", label: "Franchise" },
                  ].map((item) => (
                    <li key={item.id} className="d-flex align-items-center">
                      <a href={`#${item.id}`} className="text-dark text-decoration-none">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div
              className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 9999 }}
            >
              <div
                className="bg-white rounded-4 shadow-lg text-center px-4 py-4 position-relative"
                style={{ width: "90%", maxWidth: "350px", minHeight: "80%" }}
              >
                {/* Close Button */}
                <button
                  className="position-absolute top-0 end-0 m-3 border-0 bg-transparent"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <i className="fas fa-times fa-lg text-dark"></i>
                </button>

                {/* Logo */}
                <div className="mb-4 mt-2">
                  <img
                    src="/assets/TFC_LOGO_jpeg-01-removebg-preview.png"
                    alt="Company Logo"
                    className="img-fluid"
                    style={{ width: "130px", height: "auto" }}
                  />
                </div>

                {/* Mobile Nav Items */}
                <ul className="list-unstyled text-uppercase mb-4">
                  {[
                    "reviews",
                    "our-story",
                    "ambience",
                    "specialities",
                    "about-us",
                    "dishes",
                    "franchise",
                  ].map((item, index) => (
                    <li className="mb-3" key={index}>
                      <a
                        href={`#${item}`}
                        className="text-dark text-decoration-none"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.replace("-", " ")}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#"
                  className="btn text-white fw-bold w-100"
                  style={{
                    background: "linear-gradient(to right, #4DA8F7, #FE1C94)",
                    borderRadius: "25px",
                    padding: "12px 20px",
                    fontSize: "16px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  }}
                >
                  Get 7 Day Free Trial &nbsp;
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
