// CSS Imports
import "./Template.css";
import "./Animation.css";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import FranchiseForm from "./FranchiseForm";


// React & Hooks
import React, { useState, useEffect } from "react";

// Router & Components
import { Link } from "react-router-dom";
import Contact from "./Contact";
import WhyWeRock from "./why-we-rock";
import Slider from "react-slick";

// Swiper Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// import "./ScrollDishes.css"; // optional
// import Dishes from "./Dishes"; // optional




function Home() {

    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.trim()) {
            alert("Please enter a valid email address.");
            return;
        }

        // Perform actual subscription logic here (API call, etc.)
        console.log("Subscribed with:", email);

        // Reset email field
        setEmail("");

        alert("Thank you for subscribing!");
    };

    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 200);
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);


    const [category, setCategory] = useState("signature");
    // const [category, setCategory] = useState("signature");
    //  const [category, setCategory] = useState("maharashtrian");


    const dishes = {
        signature: [
            { name: "Butter Chicken", img: "src/assets/img/Exploreitems/unnamed.jpg", badge: "Best Seller" },
            { name: "Paneer Tikka", img: "src/assets/img/Exploreitems/paneer tikka.jpg", badge: "Veg" },
            // { name: "Paneer Tikka", img: "src/assets/img/WhatsAppimg/WhatsApp Image 2025-07-23 at 5.00.09 PM.jpeg", badge: "Veg" },
            { name: "Paneer Tikka", img: "src/assets/img/icons/claydish2.jpg", badge: "Veg" },
            { name: "Paneer Tikka", img: "src/assets/img/icons/thaalis1.jpg", badge: "Veg" },
            { name: "Paneer Tikka", img: "src/assets/img/icons/thalis2.jpg", badge: "Veg" },
            { name: "Paneer Tikka", img: "src/assets/img/icons/thalis4.jpg", badge: "Veg" },
            { name: "Paneer Tikka", img: "src/assets/img/WhatsAppimg/WhatsApp Image 2025-07-23 at 5.00.09 PM.jpeg", badge: "Veg" },

            // more...
        ],
        maharashtrian: [
            { name: "Misal Pav", img: "src/assets/img/icons/MahThalis.jpg", badge: "Hot" },
            { name: "Puran Poli", img: "src/assets/img/icons/puranpolithali.jpg", badge: "Sweet" },
            { name: "Vada Pav", img: "src/assets/img/icons/mahthalis2.jpg", badge: "Snack" },
            { name: "Vada Pav", img: "src/assets/img/icons/Mahthalis3.jpg", badge: "Snack" },
            { name: "Vada Pav", img: "src/assets/img/icons/Mahthalis4.jpg", badge: "Snack" },
            { name: "Vada Pav", img: "src/assets/img/icons/mahthalis5.jpg", badge: "Snack" },
            // { name: "Vada Pav", img: "src/assets/img/Exploreitems/vadapav.png", badge: "Snack" },
            // { name: "Vada Pav", img: "src/assets/img/Exploreitems/vadapav.png", badge: "Snack" },
            // { name: "Vada Pav", img: "src/assets/img/Exploreitems/vadapav.png", badge: "Snack" },
            // { name: "Vada Pav", img: "src/assets/img/Exploreitems/vadapav.png", badge: "Snack" },
            // { name: "Vada Pav", img: "src/assets/img/Exploreitems/vadapav.png", badge: "Snack" },

            // more...
        ],
        punjabi: [
            { name: "Chole Bhature", img: "src/assets/img/icons/Punjabthalis1.jpg", badge: "Spicy" },
            { name: "Rajma Chawal", img: "src/assets/img/icons/punjabthalis2.jpg", badge: "Classic" },
            { name: "Rajma Chawal", img: "src/assets/img/icons/punjabthalis3.jpg", badge: "Classic" },
            { name: "Rajma Chawal", img: "src/assets/img/icons/punjabthalis4.jpg", badge: "Classic" },
            { name: "Rajma Chawal", img: "src/assets/img/icons/punjabthalis5.jpg", badge: "Classic" },
            { name: "Rajma Chawal", img: "src/assets/img/icons/punjabthalis6.jpg", badge: "Classic" },
            { name: "Rajma Chawal", img: "src/assets/img/icons/punjabthalis7.jpg", badge: "Classic" },
            { name: "Rajma Chawal", img: "src/assets/img/icons/punjabthalis8.jpg", badge: "Classic" },
            { name: "Rajma Chawal", img: "src/assets/img/icons/rajmapunjab.jpg", badge: "Classic", price: "₹100" },

            // more...
        ]
    };

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const items = [
        {
            img: 'src/assets/img/Exploreitems/htshape12.png',
            title: 'Gunna Can',
            desc: 'It is a long established fact that a reader BBQ Chicken.',
            price: '$50.00',
            badge: 'hot',
        },
        {
            img: 'src/assets/img/Exploreitems/htshape13.png',
            title: 'Dr Pepper Can',
            desc: 'It is a long established fact that a reader BBQ Chicken.',
            price: '$50.00',
            badge: '',
        },
        {
            img: 'src/assets/img/Exploreitems/htshape14.png',
            title: 'Ocem Blue',
            desc: 'It is a long established fact that a reader BBQ Chicken.',
            price: '$50.00',
            badge: 'new',
        },
        {
            img: 'src/assets/img/Exploreitems/htshape15.png',
            title: 'Calyps Ocem',
            desc: 'It is a long established fact that a reader BBQ Chicken.',
            price: '$50.00',
            badge: 'sale',
        },
    ];
    // useEffect(() => {
    AOS.init({
        duration: 1000,
        once: true,
    });
    // }, []);


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,              // ✅ Auto-scroll
        autoplaySpeed: 3000,         // ✅ Every 3 seconds
        pauseOnHover: true,          // ✅ Optional
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const testimonials = [
        {
            name: "John Doe",
            role: "CEO, Example Corp",
            image: "https://randomuser.me/api/portraits/men/11.jpg",
            text: "Working with your team was an absolute pleasure! You truly brought our vision to life.",
        },
        {
            name: "Jane Smith",
            role: "Marketing Head, Bright Ltd",
            image: "https://randomuser.me/api/portraits/women/12.jpg",
            text: "The best service I’ve ever experienced. Totally recommended for startups and SMEs!",
        },
        {
            name: "Rahul Sharma",
            role: "CTO, TechWaves",
            image: "https://randomuser.me/api/portraits/men/15.jpg",
            text: "Extremely reliable and professional team. The results exceeded our expectations.",
        },

    ];
    return (
        <>


            <div className="container-fluid m-0 p-0 overflow-hidden">


                {/* header */}
                <header className="m-0 p-0 overflow-hidden">
                    <div
                        className="header-bottom home2-header-bottom mb-5"
                        style={{
                            padding: "5px 0",
                            backgroundColor: "#FFFAEC",
                        }}
                    >
                        <div className="container">
                            {/* Mobile Top Bar */}
                            <div className="d-flex justify-content-between align-items-center py-2 d-lg-none">
                                <a href="/">
                                    <img
                                        src="src/assets/TFC_LOGO_jpeg-01-removebg-preview.png"
                                        alt="logo"
                                        style={{ height: "150px", width: "150px" }}
                                    />
                                </a>
                                <button
                                    className="mobile-menu-toggle border-0 bg-transparent"
                                    onClick={() => setIsMobileMenuOpen(true)}
                                >
                                    <i className="fas fa-bars fa-2x text-dark"></i>
                                </button>
                            </div>

                            {/* Desktop Navigation */}
                            <div className="row justify-content-center align-items-center">
                                <div className="col-lg-12 d-none d-lg-block">
                                    <nav id="mobile-menu">
                                        <ul className="main-menu main-menu2 d-flex justify-content-center align-items-center gap-5 text-center text-uppercase m-0 p-0">
                                            <li><a href="#reviews">Reviews</a></li>
                                            <li><a href="#our-story">Our Story</a></li>
                                            <li><a href="#ambience">Ambience</a></li>
                                            <li className="logo px-3">
                                                <a href="/">
                                                    <img
                                                        src="src/assets/TFC_LOGO_jpeg-01-removebg-preview.png"
                                                        alt="logo"
                                                        style={{ height: "120px", width: "120px" }}
                                                    />
                                                </a>
                                            </li>
                                            <li><a href="#specialities">Specialities</a></li>
                                            <li><a href="#about-us">About Us</a></li>
                                            <li><a href="#dishes">Dishes</a></li>
                                            <li><a href="#franchise">Franchise</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            {/* Modern Mobile Popup Menu */}
                            {isMobileMenuOpen && (
                                <div
                                    className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
                                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 9999 }}
                                >
                                    <div
                                        className="bg-white rounded-4 shadow-lg text-center px-4 py-4 position-relative"
                                        style={{
                                            width: "90%",
                                            maxWidth: "350px",
                                            minHeight: "80%",
                                        }}
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
                                                src="src/assets/TFC_LOGO_jpeg-01-removebg-preview.png"
                                                alt="Company Logo"
                                                className="img-fluid"
                                                style={{ width: "150px", height: "auto" }}
                                            />
                                        </div>

                                        {/* Mobile Nav Items (Same as yours) */}
                                        <ul className="list-unstyled text-uppercase mb-4">
                                            <li className="mb-3">
                                                <a
                                                    href="#reviews"
                                                    className="text-dark text-decoration-none"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    Reviews
                                                </a>
                                            </li>
                                            <li className="mb-3">
                                                <a
                                                    href="#our-story"
                                                    className="text-dark text-decoration-none"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    Our Story
                                                </a>
                                            </li>
                                            <li className="mb-3">
                                                <a
                                                    href="#ambience"
                                                    className="text-dark text-decoration-none"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    Ambience
                                                </a>

                                            </li>
                                            <li className="mb-3">
                                                <a
                                                    href="#specialities"
                                                    className="text-dark text-decoration-none"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    Specialities
                                                </a>
                                            </li>
                                            <li className="mb-3">
                                                <a
                                                    href="#about-us"
                                                    className="text-dark text-decoration-none"
                                                    onClick={() => setIsMobileMenuOpen(false)}>
                                                    About Us
                                                </a>
                                            </li>
                                            <li className="mb-3">
                                                <a
                                                    href="#dishes"
                                                    className="text-dark text-decoration-none"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    Dishes
                                                </a>
                                            </li>
                                            <li className="mb-4">
                                                <a href="#franchise"
                                                    className="text-dark text-decoration-none"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    Franchise
                                                </a>
                                            </li>
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



                {/* burger-promo-area */}
                <section
                    className="delivery-area burger-promo-area pb-5 position-relative overflow-hidden m-0 p-0"
                    style={{
                        marginTop: "0px",
                        paddingTop: "330px",
                        backgroundImage: "url('src/assets/img/WhatsAppimg/WhatsApp Image 2025-07-22 at 5.29.37 PM.jpeg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        height: "100vh",
                        zIndex: 0,
                    }}
                >
                    {/* 🍃 Decorative Floating Leaves */}
                    <div
                        className="item-animateTwo"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            pointerEvents: "none",
                            zIndex: 2,
                        }}
                    >
                        <img
                            src="src/assets/img/icons/1.png"
                            alt="leaf"
                            style={{
                                position: "absolute",
                                width: "10vh",
                                height: "auto",
                                top: "15%",
                                left: "5%",
                                opacity: 0.8,
                                animation: "float1 6s ease-in-out infinite",
                            }}
                        />
                        <img
                            src="src/assets/img/icons/14.png"
                            alt="leaf"
                            style={{
                                position: "absolute",
                                width: "40vh",
                                height: "auto",
                                top: "35%",
                                left: "80%",
                                opacity: 0.8,
                                animation: "float2 6s ease-in-out infinite",
                                animationDelay: "2s",
                            }}
                        />
                        <img
                            src="src/assets/img/icons/24.png"
                            alt="leaf"
                            style={{
                                position: "absolute",
                                width: "20vh",
                                height: "auto",
                                top: "60%",
                                left: "20%",
                                opacity: 0.8,
                                animation: "float3 6s ease-in-out infinite",
                                animationDelay: "4s",
                            }}
                        />
                    </div>

                    {/* 📦 Content Container */}
                    <div className="container-fluid">
                        <div className="row">
                            <div
                                className="col-lg-6 col-md-12 align-self-center"
                                data-aos="fade-right"
                                style={{
                                    marginTop: "280px",
                                    marginLeft: "60px",
                                }}
                            >
                                <div className="delivery-right text-center text-lg-start px-3 px-sm-5">
                                    <div className="common-title-area pb-4">
                                        <h3 className="text-uppercase text-danger fs-5 fs-md-6">Best in Town</h3>
                                        <h1 className="fw-bold display-6 text-white">
                                            Slow-Cooked Perfection{" "}
                                            <span className="text-primary"> ./Family </span>Recipes, Shared
                                        </h1>
                                        <h5 className="my-3 text-light small">bacon - potatoes - bbq sauce</h5>
                                        <div className="order-box d-flex align-items-center justify-content-center justify-content-lg-start flex-wrap gap-2">
                                            <a href="shopping-cart.html" className="btn btn-danger me-2">
                                                Order Now
                                            </a>
                                            <h6 className="mb-0 text-white">
                                                Price: <span className="text-success fw-bold">$10.50</span>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>






                {/* Our Specilities */}
                <section id="specialities" className="banner-gallery banner-gallery2 overflow-hidden py-5 position-relative m-0 p-0">
                    <div className="text-center py-4">
                        <h1 data-aos="fade-up">Our Specialities</h1>
                        <span data-aos="fade-up" data-aos-delay="100">Crafting Flavors, Preserving Culture.</span>
                    </div>

                    <div className="container position-relative">

                        {/* ✅ Floating Shapes with Responsive Positions */}
                        <div className="del-shapes">
                            {/* Left Floating Shape */}
                            <span
                                className="ds-1 item-animateTwo floating d-none d-md-block"
                                style={{
                                    position: "absolute",
                                    top: "10%",
                                    left: "-30px",
                                    zIndex: 0
                                }}
                                data-aos="fade-down"
                            >
                                <img
                                    src="src/assets/img/icons/9.png"
                                    alt="Floating Shape Left"
                                    className="img-fluid"
                                    style={{ width: "150px", height: "100px", marginLeft: "-40px" }}
                                />
                            </span>

                            {/* Right Rotating Shape */}
                            <span
                                className="ds-2 rotating item-animateTwo d-none d-md-block"
                                style={{
                                    position: "absolute",
                                    bottom: "5%",
                                    right: "-30px",
                                    zIndex: 0
                                }}
                                data-aos="fade-up"
                            >
                                <img
                                    src="src/assets/img/icons/20.png"
                                    alt="Floating Shape Right"
                                    className="img-fluid "
                                    style={{ width: "200px", height: "100px", marginRight: "-40px" }}
                                />
                            </span>
                        </div>

                        {/* ===== Content Grid ===== */}
                        <div className="row g-4">
                            <div className="col-lg-6 col-md-12" data-aos="fade-right">
                                <div className="gallery-img-1 text-center text-lg-start">
                                    <h3>Authenticity Over Trends</h3>
                                    <p>Sale off 50% only this week</p>
                                    <a href="shopping-cart.html" className="btn btn-primary">Order Now</a>
                                    <img src="src/assets/img/WhatsAppimg/WhatsApp Image 2025-07-22 at 9.05.07 PM (1).jpeg" alt="" className="img-fluid mt-3" />
                                </div>
                            </div>

                           

                            <div className="col-lg-3 col-md-6" data-aos="zoom-in" style={{ backgroundImage: "url('src/assets/img/WhatsAppimg/WhatsApp Image 2025-07-22 at 9.05.06 PM.jpeg" }}>
                                <div className="gallery text-center">
                                    <h5>Home<br />-Made<br />Masalas</h5>
                                    {/* <img src="src/assets/img/WhatsAppimg/WhatsApp Image 2025-07-22 at 9.05.07 PM (2).jpeg" alt="" className="img-fluid mb-2" />
                                    <img src="assets/images/shapes/41.png" alt="" className="img-fluid s1" /> */}
                                    <span className="gprice-2">$15</span><br />
                                    <a href="shopping-cart.html" className="btn btn-outline-dark btn-sm mt-2">Order Now</a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6" data-aos="zoom-in-up" >
                                <div className="gallery-img-2 text-center"style={{ backgroundImage: "url('src/assets/img/WhatsAppimg/cooking2.jpg"}}>
                                    {/* <img src="src/assets/img/WhatsAppimg/cooking2.jpg" alt="" className="img-fluid mb-2" /> */}
                                    <span className="gprice-1">$15</span>
                                    <div className="gimg-content">
                                        <h5>Home-Made<br />Masalas</h5>
                                        <a href="shopping-cart.html" className="btn btn-outline-dark btn-sm mt-2">Order Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Row */}
                        <div className="row g-4 mt-4">
                            <div className="col-lg-3 col-md-6" data-aos="fade-up-right" style={{ backgroundImage:"url('src/assets/img/WhatsAppimg/cooking.jpg"}}>
                                <div className="gallery text-center">
                                    <h5>Hearty <br />Vegetarian<br />Staples</h5>
                                    {/* <img src="src/assets/img/WhatsAppimg/cooking.jpg" alt="" className="img-fluid mb-2" /> */}
                                    {/* <img src="src/assets/img/WhatsAppimg/cooking.jpg" alt="" className="img-fluid s1" /> */}
                                    <span className="gprice-2">$15</span><br />
                                    <a href="shopping-cart.html" className="btn btn-outline-dark btn-sm mt-2">Order Now</a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6" data-aos="fade-up">
                                <div className="gallery-img-22 text-center">
                                    {/* <img src="assets/images/gallery/grid5.png" alt="" className="img-fluid mb-2" /> */}
                                    <span className="gprice-1">$15</span>
                                    <div className="gimg-content">
                                        <h5>Beloved <br /> Punjabi<br /> Favourites</h5>
                                        <img src="assets/images/shapes/42.png" alt="" className="img-fluid s1" />
                                        <a href="shopping-cart.html" className="btn btn-outline-dark btn-sm mt-2">Order Now</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12" data-aos="fade-left">
                                <div className="gallery-img-1 text-center text-lg-start">
                                    <h5>Rich Maharashtrian <br />Non-Veg Specials</h5>
                                    <p>Sale off 50% only this week</p>
                                    <a href="shopping-cart.html" className="btn btn-primary">Order Now</a><br />
                                    <img src="src/assets/img/WhatsAppimg/WhatsApp Image 2025-07-22 at 9.05.07 PM.jpeg" alt="" className="img-fluid mt-3" />
                                    {/* <img src="src/assets/img/WhatsAppimg/WhatsApp Image 2025-07-22 at 9.05.07 PM.jpeg" alt="" className="img-fluid pbadge mt-2" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>








                {/*Who Are We */}
                <section className="softdrink-section padding-bottom-80  position-relativecm-0 p-0 overflow-hidden w-100" id="about-us">
                    {/* 🍃 Decorative Floating Leaves */}
                    <div className="item-animateTwo"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            pointerEvents: "none",
                            zIndex: 0,
                        }}
                    >
                        <img
                            src="src/assets/img/icons/21.png"
                            alt="leaf"
                            style={{
                                position: "absolute",
                                width: "10vh",
                                height: "auto",
                                top: "15%",
                                left: "10%",
                                opacity: 0.8,
                                animation: "float1 6s ease-in-out infinite",
                            }}
                        />
                        <img
                            src="src/assets/img/icons/2.png"
                            alt="leaf"
                            style={{
                                position: "absolute",
                                width: "30vh",
                                height: "auto",
                                top: "40%",
                                right: "5%",
                                opacity: 0.8,
                                animation: "float2 6s ease-in-out infinite",
                                animationDelay: "1.5s",
                                zIndex: 1000, // <-- Added here
                            }}
                        />
                        <img
                            src="src/assets/img/icons/5.png"
                            alt="leaf"
                            style={{
                                position: "absolute",
                                width: "30vh",
                                height: "auto",
                                top: "65%",
                                left: "20%",
                                opacity: 0.8,
                                animation: "float3 6s ease-in-out infinite",
                                animationDelay: "3s",
                            }}
                        />
                    </div>

                    <div className="container">
                        <h1 className="text-center mb-5" data-aos="fade-up">Who Are We</h1>
                        <div className="row pb-5">

                            {/* Left Content */}
                            <div className="col-lg-6" data-aos="fade-right">
                                <div className="softdrink-right">
                                    <p>
                                        Hotel TFC stands as a beacon of traditional
                                        Indian culinary arts in the heart of Indapur.
                                        We are a warm and welcoming restaurant
                                        specializing in authentic Maharashtrian and
                                        Punjabi non-vegetarian and vegetarian
                                        dishes. Our mission is to present the true
                                        essence of these rich culinary traditions,
                                        focusing on the bold, rustic flavors of
                                        Maharashtra and the beloved, comforting
                                        tastes of Punjab. We believe that food is not
                                        just sustenance, but an experience, a
                                        memory, and a connection to our roots.
                                    </p>
                                    <h2>
                                        The Heartbeat of Indapur's <span>Heritage Cuisine</span>
                                    </h2>
                                    <div className="quote-box d-flex" data-aos="zoom-in">
                                        <span className="qq"><i className="fas fa-quote-right"></i></span>
                                        <div className="qoute-img">
                                            <img src="src/assets/img/icons/11.png" className="item-animateTwo" alt="" />
                                        </div>
                                        <div className="quote-content">
                                            <h5>The Heartbeat of Indapur's Heritage Cuisine.</h5>
                                            <p>Washington Irving</p>
                                        </div>
                                    </div>
                                    <a href="shopping-cart.html" className="btn2" data-aos="fade-up">shop now</a>
                                </div>
                            </div>

                            {/* Right Image Grid */}
                            <div className="col-lg-6" data-aos="fade-left" >
                                <img src="src/assets/img/OurSpecialitiesimg/who are we_ (1).png" alt="" style={{ marginLeft: "90px" }} />

                            </div>
                        </div>

                        {/* ✅ Decorative Animated Background Shapes */}
                        <div className="decorative-shapes position-absolute item-animateTwo top-0 start-0 w-100 h-100">
                            <span className="position-absolute floating" style={{ top: "20%", left: "-40px" }}>
                                <img
                                    src="src/assets/img/icons/8.png"
                                    alt="Decorative Left"
                                    style={{ width: "80px", height: "80px" }}
                                />
                            </span>
                            <span className="position-absolute  rotating" style={{ bottom: "10%", right: "30px" }}>
                                <img
                                    src="src/assets/img/icons/10.png"
                                    alt="Decorative Right"
                                    style={{ width: "100px", height: "100px" }}
                                />
                            </span>
                        </div>
                    </div>
                </section>





                {/*Why Tfc section */}
                <section className="drink-ind py-5 m-0 p-0 overflow-hidden">
                    <div className="container-fluid p-0 m-0">
                        <h1 className="text-center mb-4" data-aos="zoom-in">Why TFC?</h1>

                        <div className="row align-items-center gy-5">

                            {/* Left Image with Decorative Shapes */}


                            <div className="col-lg-6 col-md-12 p-0 position-relative " data-aos="fade-right">
                                <div className="drink-ind-left text-center">
                                    <img
                                        src="src/assets/img/OurSpecialitiesimg/why tfc_ (1).png"
                                        alt="Why TFC"
                                        className="img-fluid w-100 "
                                        style={{ maxWidth: "90%", height: "100%" }}
                                    />

                                    {/* Decorative Floating and Rotating Shapes */}
                                    <div className="position-absolute item-animateTwo top-0 start-0 w-100 h-100">
                                        {/* <span className="position-absolute floating d-none d-md-block" style={{ top: "10%", left: "-40px" }} data-aos="fade-in">
                                            <img
                                                src="src/assets/img/icons/18.png"
                                                alt="Floating Shape"
                                                style={{ width: "80px", height: "80px" }}
                                            />
                                        </span> */}
                                        <span className="position-absolute rotating d-none d-md-block" style={{ bottom: "10%", right: "-30px" }} data-aos="fade-in">
                                            <img
                                                src="src/assets/img/icons/17.png"
                                                alt="Rotating Shape"
                                                style={{ width: "100px", height: "100px" }}
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Content */}
                            <div className="col-lg-6 col-md-12" data-aos="fade-left">
                                <div className="drink-ind-right">
                                    <div className="common-title-area3 text-center text-lg-start mb-4">
                                        <h2>
                                            Authenticity Guaranteed:

                                            <br />
                                            Real regional flavors, <span> no gimmicks.</span>
                                        </h2>
                                    </div>

                                    <div className="row g-4">
                                        {/* Feature 1 */}
                                        <div className="col-sm-6" data-aos="fade-up" data-aos-delay="200">
                                            <div className="single-fea d-flex flex-column flex-sm-row align-items-center text-center text-sm-start">
                                                <div className="fea-img mb-3 mb-sm-0 me-sm-3">
                                                    {/* <img
                                        src="assets/images/img/htshape3.png"
                                        alt="Quality Hops"
                                        className="img-fluid"
                                        style={{ maxWidth: "80px" }}
                                    /> */}
                                                </div>
                                                <div className="fea-content">
                                                    <h5>Quality Hops</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Feature 2 */}
                                        <div className="col-sm-6" data-aos="fade-up" data-aos-delay="300">
                                            <div className="single-fea d-flex flex-column flex-sm-row align-items-center text-center text-sm-start">
                                                <div className="fea-img mb-3 mb-sm-0 me-sm-3">
                                                    <img
                                                        src="assets/images/img/htshape4.png"
                                                        alt="Premium Malts"
                                                        className="img-fluid"
                                                        style={{ maxWidth: "80px" }}
                                                    />
                                                </div>
                                                <div className="fea-content">
                                                    <h5>Premium Malts</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div> {/* row end */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>






                {/*food-brand section */}
                <section className="food-brand-section py-5 m-0 p-0 overflow-hidden">
                    <div className="container">
                        <div className="row align-items-center gy-5">
                            {/* Left Content */}
                            <div className="col-lg-5 col-md-12 position-relative" data-aos="fade-left">
                                <div className="food-brand-left text-center text-md-start">
                                    <div className="common-title-area3 mb-4">
                                        <h2 className="mb-3" data-aos="zoom-in" data-aos-delay="100">
                                            Home-Cooked Goodness:
                                            <br />
                                            Handmade masalas and <span>slow-cooking techniques.</span>
                                        </h2>
                                        <p data-aos="fade-up" data-aos-delay="200">
                                            Christmas is coming! Get your gifts sorted early, then you can sit back and enjoy some festive beers for yourself!
                                        </p>
                                    </div>

                                    {/* Percentages */}
                                    <div className="inner-brand my-4">
                                        <div className="row text-center">
                                            <div className="col-4" data-aos="fade-up" data-aos-delay="300">
                                                <div className="single-percentage">
                                                    <h6>Extract Juice</h6>
                                                    <h3>15%</h3>
                                                </div>
                                            </div>
                                            <div className="col-4" data-aos="fade-up" data-aos-delay="400">
                                                <div className="single-percentage">
                                                    <h6>Alcohol</h6>
                                                    <h3>0%</h3>
                                                </div>
                                            </div>
                                            <div className="col-4" data-aos="fade-up" data-aos-delay="500">
                                                <div className="single-percentage">
                                                    <h6>Vitamin A-Z</h6>
                                                    <h3>90%</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <a href="shopping-cart.html" className="btn2" data-aos="zoom-in" data-aos-delay="600">
                                        Shop Now
                                    </a>
                                </div>
                            </div>

                            {/* Right Image + Decorative Shapes */}
                            <div className="col-lg-7 col-md-12 position-relative" data-aos="fade-right">
                                <div className="food-brand-right text-center position-relative">
                                    <img
                                        src="src/assets/img/OurSpecialitiesimg/home made masal_ (1).png"
                                        alt="Food Brand Visual"
                                        className="img-fluid"
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto",
                                            margin: "0 auto",
                                            display: "block"
                                        }}
                                    />

                                    {/* Decorative Shapes */}
                                    <div className="decorative-shapes position-absolute top-0 start-0 w-100 h-100">
                                        <span
                                            className="position-absolute floating item-animateTwo"
                                            style={{ top: "10%", left: "-10px" }}
                                            data-aos="zoom-in"
                                        >
                                            <img
                                                src="src/assets/img/icons/18.png"
                                                alt="Shape 1"
                                                style={{ width: "60px", height: "60px" }}
                                            />
                                        </span>
                                        <span
                                            className="position-absolute rotating item-animateTwo"
                                            style={{ bottom: "10px", right: "-20px" }}
                                            data-aos="fade-up"
                                        >
                                            <img
                                                src="src/assets/img/icons/24.png"
                                                alt="Shape 2"
                                                style={{ width: "80px", height: "80px" }}
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>





                {/* Drink Section */}
                <div className="container-fluid">
                    <section
                        className="drink-ind py-5 overflow-hidden position-relative"
                        data-aos="fade-up"
                        style={{
                            backgroundImage: 'url("src/assets/img/icons/who are we_.png")',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            padding: "40px",
                            height: "80vh",
                        }}
                    >
                        <div className="container">
                            <div className="row align-items-center gy-5">

                                {/* Left Decorative Area - Now no background here */}
                                <div
                                    className="col-lg-6 col-md-12 item-animateTwo position-relative"
                                    data-aos="fade-right"
                                >
                                    {/* Decorative Shapes */}
                                    <div className="position-absolute item-animateTwo top-0 start-0 w-100 h-100">
                                        <span
                                            className="position-absolute floating d-none d-sm-block"
                                            style={{ top: '15%', left: '-40px' }}
                                            data-aos="zoom-in"
                                        >
                                            <img
                                                src="src/assets/img/icons/20.png"
                                                alt="Decor Shape 1"
                                                style={{ width: '60px', height: '60px' }}
                                            />
                                        </span>
                                        <span
                                            className="position-absolute rotating d-none d-sm-block"
                                            style={{ bottom: '10px', right: '-30px' }}
                                            data-aos="fade-up"
                                        >
                                            <img
                                                src="src/assets/img/icons/22.png"
                                                alt="Decor Shape 2"
                                                style={{ width: '80px', height: '90px', padding: "4px" }}
                                            />
                                        </span>
                                    </div>
                                </div>

                                {/* Right Content */}
                                <div className="col-lg-6 col-md-12" data-aos="fade-left">
                                    <div className="drink-ind-right text-center text-md-start">
                                        <div className="common-title-area3 mb-4">
                                            <h2 data-aos="zoom-in" data-aos-delay="100" className="fs-3">
                                                Unmatched Heritage:<br />
                                                Recipes passed down <span>through generations.</span>
                                            </h2>
                                        </div>

                                        <div className="row g-4">
                                            {/* Feature 1 */}
                                            <div className="col-sm-6 col-12" data-aos="fade-up" data-aos-delay="200">
                                                <div className="single-fea d-flex flex-column flex-sm-row align-items-center text-center text-sm-start">
                                                    <div className="fea-img mb-3 mb-sm-0 me-sm-3">
                                                        <img
                                                            src="assets/images/img/htshape3.png"
                                                            alt="Quality Hops"
                                                            className="img-fluid"
                                                            style={{ maxWidth: '60px' }}
                                                        />
                                                    </div>
                                                    <div className="fea-content">
                                                        <h5 className="fs-6 fw-bold">Quality Hops</h5>
                                                        <p className="mb-0 small">Lorem ipsum dolor sit amet consectetur.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Feature 2 */}
                                            <div className="col-sm-6 col-12" data-aos="fade-up" data-aos-delay="300">
                                                <div className="single-fea d-flex flex-column flex-sm-row align-items-center text-center text-sm-start">
                                                    <div className="fea-img mb-3 mb-sm-0 me-sm-3">
                                                        <img
                                                            src="assets/images/img/htshape4.png"
                                                            alt="Premium Malts"
                                                            className="img-fluid"
                                                            style={{ maxWidth: '60px' }}
                                                        />
                                                    </div>
                                                    <div className="fea-content">
                                                        <h5 className="fs-6 fw-bold">Premium Malts</h5>
                                                        <p className="mb-0 small">Lorem ipsum dolor sit amet consectetur.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>



                {/* Food Brand Section */}
                <section className="food-brand-section py-5" data-aos="fade-up">
                    <div className="container">
                        <div className="row align-items-center gy-5">

                            {/* Left Content */}
                            <div className="col-lg-5 col-md-12" data-aos="fade-right">
                                <div className="food-brand-left text-center text-md-start position-relative">
                                    <div className="common-title-area3 mb-4">
                                        <h2 className="mb-3">
                                            Value & Portions: Hearty meals,
                                            generous thalis, <br />
                                            <span>and great value.</span>
                                        </h2>
                                        <p>
                                            Christmas is coming! Get your gifts sorted early, then enjoy some festive beers for yourself!
                                        </p>
                                    </div>

                                    {/* Juice Info */}
                                    <div className="inner-brand my-4">
                                        <div className="row text-center">
                                            <div className="col-4" data-aos="fade-up" data-aos-delay="100">
                                                <div className="single-percentage">
                                                    <h6>Extract Juice</h6>
                                                    <h3>15%</h3>
                                                </div>
                                            </div>
                                            <div className="col-4" data-aos="fade-up" data-aos-delay="200">
                                                <div className="single-percentage">
                                                    <h6>Alcohol</h6>
                                                    <h3>0%</h3>
                                                </div>
                                            </div>
                                            <div className="col-4" data-aos="fade-up" data-aos-delay="300">
                                                <div className="single-percentage">
                                                    <h6>Vitamin A-Z</h6>
                                                    <h3>90%</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <a
                                        href="shopping-cart.html"
                                        className="btn2 d-inline-block"
                                        data-aos="zoom-in"
                                        data-aos-delay="400"
                                    >
                                        Shop Now
                                    </a>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div
                                className="col-lg-6 col-md-12 offset-lg-1 text-center position-relative"
                                data-aos="fade-left"
                            >
                                <div
                                    className="food-brand-right mx-auto"
                                    style={{
                                        maxWidth: "100%",
                                        width: "100%",
                                    }}
                                >
                                    <img
                                        src="src/assets/img/OurSpecialitiesimg/thali .png"
                                        alt="Iced Green Tea"
                                        className="img-fluid item-animateTwo"
                                        style={{
                                            width: "100%",
                                            maxWidth: "800px",
                                            height: "auto",
                                        }}
                                    />

                                    {/* Decorative Shapes */}
                                    <div className="decorative-shapes item-animateTwo position-absolute top-0 start-0 w-100 h-100">
                                        <span
                                            className="position-absolute floating d-none d-sm-block"
                                            style={{ top: "20%", left: "-30px" }}
                                            data-aos="zoom-in"
                                        >
                                            <img
                                                src="src/assets/img/Exploreitems/Untitled_design__1_-removebg-preview.png"
                                                alt="Decor Shape 1"
                                                style={{ width: "80px", height: "80px" }}
                                            />
                                        </span>
                                        <span
                                            className="position-absolute item-animateTwo rotating d-none d-sm-block"
                                            style={{ bottom: "0", right: "-40px" }}
                                            data-aos="fade-left"
                                        >
                                            <img
                                                src="src/assets/img/Exploreitems/Untitled_design-removebg-preview.png"
                                                alt="Decor Shape 2"
                                                style={{ width: "100px", height: "100px" }}
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>






                {/*drink-ind section */}
                <section className="drink-ind py-5 m-0 p-0" data-aos="fade-up">
                    <div className="container-fluid">
                        <div className="row align-items-center gy-5">
                            {/* Left Column - Image and Decorative Shapes */}
                            <div
                                className="col-lg-6 col-md-12 d-flex justify-content-center position-relative"
                                data-aos="fade-right"
                            >
                                <div className="drink-ind-left text-center">
                                    <img
                                        src="src/assets/img/OurSpecialitiesimg/family.png"
                                        alt="Drink Ingredients"
                                        className="img-fluid"
                                        style={{
                                            maxWidth: "90%",
                                            height: "auto",
                                        }}
                                    />
                                </div>

                                {/* Decorative Shapes */}
                                <div className="drink-items-shapes position-absolute top-0 start-0 w-100 h-100">
                                    <span
                                        className="fs-1 item-animateOne position-absolute"
                                        style={{ top: "60px", left: "10px" }}
                                    >
                                        <img
                                            src="src/assets/img/icons/12.png"
                                            alt="shape1"
                                            style={{ height: "80px", width: "80px" }}
                                        />
                                    </span>
                                    <span
                                        className="fs-2 item-animateTwo position-absolute"
                                        style={{ bottom: "10px", right: "10px" }}
                                    >
                                        <img
                                            src="src/assets/img/icons/9.png"
                                            alt="shape2"
                                            style={{ height: "60px", width: "60px" }}
                                        />
                                    </span>
                                    <span
                                        className="fs-3 item-animateTwo position-absolute"
                                        style={{
                                            top: "50%",
                                            right: "20px",
                                            transform: "translateY(-50%)",
                                        }}
                                    >
                                        <img
                                            src="src/assets/img/icons/17.png"
                                            alt="shape3"
                                            style={{ height: "70px", width: "70px" }}
                                        />
                                    </span>
                                    <span
                                        className="fs-4 item-animateTwo position-absolute"
                                        style={{ top: "10px", right: "30%" }}
                                    >
                                        <img
                                            src="src/assets/img/icons/16.png"
                                            alt="shape4"
                                            style={{ height: "60px", width: "60px" }}
                                        />
                                    </span>
                                </div>
                            </div>

                            {/* Right Column - Text Content */}
                            <div className="col-lg-6 col-md-12 px-4" data-aos="fade-left">
                                <div className="drink-ind-right">
                                    <div className="common-title-area3 text-center text-md-start mb-4">
                                        <h2>
                                            Warm Hospitality:
                                            A family-friendly <br className="d-none d-md-block" />
                                            atmosphere<span> that feels like home</span>
                                        </h2>
                                    </div>

                                    <div className="row g-4">
                                        {/* Feature 1 */}
                                        <div
                                            className="col-md-6"
                                            data-aos="fade-up"
                                            data-aos-delay="100"
                                        >
                                            <div className="single-fea d-flex flex-column flex-md-row align-items-center text-center text-md-start">
                                                <div className="fea-img mb-3 mb-md-0 me-md-3">
                                                    <img
                                                        src="src/assets/img/icons/why tfc_.png"
                                                        alt="Quality Hops"
                                                        className="img-fluid"
                                                        style={{ maxWidth: "70px" }}
                                                    />
                                                </div>
                                                <div className="fea-content">
                                                    <h5>Quality Hops</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Feature 2 */}
                                        <div
                                            className="col-md-6"
                                            data-aos="fade-up"
                                            data-aos-delay="200"
                                        >
                                            <div className="single-fea d-flex flex-column flex-md-row align-items-center text-center text-md-start">
                                                <div className="fea-img mb-3 mb-md-0 me-md-3">
                                                    <img
                                                        src="assets/images/img/htshape4.png"
                                                        alt="Premium Malts"
                                                        className="img-fluid"
                                                        style={{ maxWidth: "70px" }}
                                                    />
                                                </div>
                                                <div className="fea-content">
                                                    <h5>Premium Malts</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Feature Row */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>





                {/*Explore Our Signature Dishes section */}
                <section className="drink-items-section py-5 m-0 p-0" data-aos="fade-up" id="dishes">
                    {/* Decorative Shapes */}
                    <div className="drink-items-shapes" id="ExploreOurSignatureDishes">
                        <span className="fs-1 item-animateOne">
                            <img src="src/assets/img/icons/9.png" alt="shape1" style={{ height: "100px", width: "100px", marginTop: "10px" }} />
                        </span>
                        <span className="fs-2">
                            <img src="src/assets/img/icons/8.png" alt="shape2" style={{ height: "100px", width: "100px", marginTop: "10px" }} />
                        </span>
                        <span className="fs-3 item-animateTwo">
                            <img src="src/assets/img/icons/13.png" alt="shape3" style={{ height: "100px", width: "100px", marginTop: "10px" }} />
                        </span>
                        <span className="fs-4">
                            <img src="src/assets/img/icons/14.png" alt="shape4" style={{ height: "100px", width: "100px", marginTop: "10px" }} />
                        </span>
                    </div>

                    <div className="container">
                        {/* Title & Buttons */}
                        <div className="common-title-area3 text-center mb-5" data-aos="zoom-in">
                            <h2>
                                {category === "signature" && (
                                    <>
                                        Explore Our <span>Signature Dishes</span>

                                    </>
                                )}
                                {category === "maharashtrian" && (
                                    <>
                                        Explore Our <span>Maharashtrian Dishes</span>
                                    </>
                                )}
                                {category === "punjabi" && (
                                    <>
                                        Explore Our <span>Punjabi Dishes</span>
                                    </>
                                )}
                            </h2>
                            <p className="fs-5">A Feast of Time-Honored Flavors.</p>
                            <div className="mt-3">
                                <button
                                    className={`btn2 mx-2 ${category === "maharashtrian" ? "active" : ""}`}
                                    style={
                                        window.innerWidth <= 768
                                            ? { marginTop: "3px", marginBottom: "2px" }
                                            : {}
                                    }
                                    onClick={() => setCategory("maharashtrian")}
                                >
                                    Maharashtrian
                                </button>

                                <button
                                    className={`btn2 mx-2 ${category === "signature" ? "active" : ""}`}
                                    style={window.innerWidth <= 768
                                        ? { marginTop: "3px", marginBottom: "2px" }
                                        : {}
                                    }
                                    onClick={() => setCategory("signature")}
                                >
                                    Special
                                </button>
                                <button
                                    className={`btn2 mx-2 ${category === "punjabi" ? "active" : ""}`}
                                    style={window.innerWidth <= 768
                                        ? { marginTop: "3px", marginBottom: "2px" }
                                        : {}
                                    }
                                    onClick={() => setCategory("punjabi")}
                                >
                                    Punjabi
                                </button>
                            </div>
                        </div>

                        {/* Dish Cards Carousel */}
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 2500 }}
                            spaceBetween={20}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                576: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                992: { slidesPerView: 3 },
                                1200: { slidesPerView: 4 },
                            }}
                        >
                            {dishes[category].map((dish, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="card h-100 shadow-sm border rounded-4 overflow-hidden"
                                        data-aos="fade-up"
                                        data-aos-delay={100 * (index + 1)}
                                    >
                                        <img
                                            src={dish.img}
                                            alt={dish.name}
                                            className="card-img-top"
                                            style={{
                                                height: "200px",
                                                objectFit: "cover",
                                                borderRadius: "1rem 1rem 0 0", // rounded top corners
                                            }}
                                        />
                                        <div className="card-body text-center">
                                            <h5 className="card-title">{dish.name}</h5>
                                            {/* <a href="#" className="text-primary text-decoration-underline fw-semibold">
                                                Buy Now
                                            </a> */}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>


                        {/* CTA */}
                        <div className="text-center mt-5" data-aos="zoom-in">
                            <a href="food-page.html" className="btn2">See All Items</a>
                        </div>
                    </div>
                </section>


                {/* <Dishes/> */}



                {/* Franchise Opportunity */}

                <FranchiseForm />
                <WhyWeRock />


                {/*Our Story */}
                <section className="softdrink-section padding-bottom-80 py-5 m-0 p-0" id="our-story">

                    <div className="container">
                        <h1 className="text-center mb-5" data-aos="fade-down">Our Story</h1>

                        <div className="row pb-5 align-items-center">
                            {/* Left Content */}
                            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0" data-aos="fade-right">
                                <div className="softdrink-right">
                                    <p>
                                        Hotel TFC was born from a deep-seated passion for authentic Indian
                                        cuisine, particularly the rustic and soul-satisfying non-vegetarian dishes of
                                        Maharashtra. Growing up, I always admired how other regional cuisines,
                                        like Punjabi food, gained national fame. Yet, I felt that Maharashtrian
                                        mutton dishes, with their incredible depth of flavor, didn't receive the
                                        widespread recognition they truly deserved.
                                        My childhood kitchen was a classroom of love, patience, and tradition. It
                                        taught me the magic of simple, home-style cooking – how homemade
                                        masalas, slow-cooking, and cherished family recipes create an
                                        unparalleled taste that ready-made packets simply cannot replicate.
                                        This profound appreciation for culinary heritage inspired me to create
                                        Hotel TFC. It's more than just a restaurant; it's a heartfelt tribute to our
                                        culture, a place where generations of culinary wisdom come alive on your
                                        plate. We envision Hotel TFC as a gathering spot where people can enjoy
                                        hearty meals, connect through shared flavors, and celebrate tradition. It's
                                        not just food; it's our identity.
                                        From Passion to Plate: Our Culinary Journey.
                                    </p>

                                    <h2 className="my-4">
                                        The Heartbeat of Indapur's <span className="text-highlight">Heritage Cuisine</span>
                                    </h2>

                                    {/* Quote Box */}
                                    <div className="quote-box d-flex align-items-center gap-3 my-4" data-aos="zoom-in">
                                        <span className="qq fs-3 text-primary"><i className="fas fa-quote-right"></i></span>

                                        <div className="quote-img">
                                            <img src="assets/images/img/h31.png" alt="Quote" className="img-fluid" />
                                        </div>

                                        <div className="quote-content">
                                            <h5 className="mb-1">The Heartbeat of Indapur's Heritage Cuisine.</h5>
                                            <p className="mb-0 text-muted">Washington Irving</p>
                                        </div>
                                    </div>

                                    <a href="shopping-cart.html" className="btn2 mt-3" data-aos="fade-up">Shop Now</a>
                                </div>
                            </div>

                            {/* Right Images */}
                            <div className="col-lg-6 col-md-12" data-aos="fade-left">
                                <img src="src/assets/img/OurSpecialitiesimg/our story .png" alt="" style={{height:"100vh",width:"110vh"}}/>
                                {/* <div className="row g-3">
                                    {[
                                        "htimg3.png",
                                        "htimg1.jpg",
                                        "htimg2.jpg",
                                        "htimg4.png"
                                    ].map((img, index) => (
                                        <div className="col-6" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                                            <img
                                                src={`src/assets/img/Whoweimg/${img}`}
                                                className="img-fluid rounded shadow-sm w-100 h-100 object-fit-cover"
                                                alt=""
                                            />
                                        </div>
                                    ))}
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Ambience */}
                <section className="banner-gallery banner-gallery2 overflow-hidden padding-top-120 padding-bottom-60 m-0 p-0" id="ambience">
                    <div className="container position-relative">
                        <h1 className="text-center mb-5" data-aos="zoom-in">Our Ambience</h1>

                        {/* Decorative Shapes */}
                        <div className="del-shapes">
                            <span className="ds-1 item-bounce">
                                <img src="src/assets/img/icons/24.png" alt="shape" style={{ marginTop: "-60px", width: "20vh", marginLeft: "-10px" }} />
                            </span>
                            <span className="ds-2 item-bounce">
                                <img src="src/assets/img/icons/21.png" alt="shape" style={{ marginTop: "60px", width: "40vh" }} />
                            </span>
                        </div>

                        {/* First Row */}
                        <div className="row">
                            <div className="col-lg-6 col-md-12 mb-4" data-aos="fade-right">
                                <div className="gallery-img-1 text-center text-lg-start">
                                    <h3>Buzzed Burger</h3>
                                    <p>Sale off 50% only this week</p>
                                    <a href="shopping-cart.html" className="btn btn-danger mt-2">Order Now</a>
                                    <img className="pos1 img-fluid" src="assets/images/shapes/bbr.png" alt="Buzzed Burger" />
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up">
                                <div className="gallery-img-3 text-center">
                                    <h5>
                                        Super<br />Delicious<br />Burger
                                    </h5>
                                    <a href="shopping-cart.html" className="d-block mt-2">Order Now</a>
                                    <img className="img-pos img-fluid" src="assets/images/gallery/grid1.png" alt="Burger 1" />
                                    <img src="assets/images/shapes/41.png" alt="shape" className="s1 img-fluid" />
                                    <span className="gprice-2">$15</span>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-left">
                                <div className="gallery-img-2 d-flex justify-content-end align-items-center">
                                    <img className="img-pos1 img-fluid" src="assets/images/gallery/grid2.png" alt="Burger 2" />
                                    <span className="gprice-1">$15</span>
                                    <div className="gimg-content text-end ms-2">
                                        <h5 className="margin-bottom-20">
                                            Delicious<br />Burger
                                        </h5>
                                        <a href="shopping-cart.html">Order Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Row */}
                        <div className="row margin-top-30">
                            <div className="col-lg-3 col-md-6 mb-4" data-aos="zoom-in-up">
                                <div className="gallery-img-3 gallery-img-33 text-center">
                                    <h5>
                                        Super<br />Combo<br />Burger
                                    </h5>
                                    <a href="shopping-cart.html" className="d-block mt-2">Order Now</a>
                                    <img src="assets/images/gallery/grid4.png" alt="Burger 4" className="img-pos img-fluid" />
                                    <img src="assets/images/shapes/41.png" alt="shape" className="s1 img-fluid" />
                                    <span className="gprice-2">$15</span>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4" data-aos="zoom-in">
                                <div className="gallery-img-22 d-flex justify-content-end align-items-center">
                                    <img className="img-pos img-fluid" src="assets/images/gallery/grid5.png" alt="Burger 5" />
                                    <span className="gprice-1">$15</span>
                                    <div className="gimg-content text-end ms-2">
                                        <h5 className="margin-bottom-20">
                                            Super<br />Delicious<br />Burger
                                        </h5>
                                        <img src="assets/images/shapes/42.png" alt="shape" className="s1 img-fluid" />
                                        <a href="shopping-cart.html" className="d-block mt-1">Order Now</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12 mb-4" data-aos="fade-up">
                                <div className="gallery-img-1 gallery-img-11 gallery-img-01 text-center text-lg-start">
                                    <h5 className="margin-bottom-10">
                                        Chicken<br />Combo<br />Burger
                                    </h5>
                                    <p>Sale off 50% only this week</p>
                                    <a href="shopping-cart.html" className="btn btn-danger mt-2">Order Now</a>
                                    <img className="gs1 img-fluid" src="assets/images/shapes/bbs.png" alt="Chicken Combo" />
                                    <img className="pbadge img-fluid" src="assets/images/icons/pbadge.png" alt="Badge" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Contact />

                {/* testimonial */}
                <section className="testimonial testimonial2 padding-top-110 padding-bottom-120 m-0 p-0" id="reviews">
                    <h2 className="text-center mb-5">OUR HAPPY CUSTOMERS REVIEWS</h2>
                    <div className="container position-relative">
                        {/* Decorative Shapes */}
                        <div className="testi-shapes">
                            <span className="ts-1" data-aos="fade-right">
                                <img src="assets/images/shapes/triple.png" alt="" className="img-fluid" />
                            </span>
                            <span className="ts-2 item-bounce" data-aos="zoom-in">
                                <img src="assets/images/shapes/35.png" alt="" className="img-fluid" />
                            </span>
                            <span className="ts-3 item-animateTwo" data-aos="fade-left">
                                <img src="assets/images/shapes/26.png" alt="" className="img-fluid" />
                            </span>
                        </div>

                        {/* Section Heading */}
                        <div className="common-title-area text-center padding-bottom-50" data-aos="fade-up">
                            <h3 className="text-uppercase">Testimonial</h3>
                            <h2>
                                Client <span className="text-warning">Feedback</span>
                            </h2>
                        </div>

                        {/* Testimonial Slider */}
                        <Slider {...settings}>
                            {testimonials?.map((item, index) => (
                                <div className="px-3" key={index}>
                                    <div
                                        className="single-testimonial text-center p-4 shadow-sm rounded bg-white h-100"
                                        data-aos="fade-up"
                                    >
                                        <div className="testi-top position-relative">
                                            {/* Decorative Shape */}
                                            <div className="tin-shapes position-absolute start-0 top-0">
                                                <span className="tsin-1">
                                                    <img
                                                        src="assets/images/shapes/33.png"
                                                        alt=""
                                                        className="img-fluid"
                                                        style={{ width: "40px" }}
                                                    />
                                                </span>
                                            </div>

                                            {/* Client Image */}
                                            <div className="testi-img mb-3">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="img-fluid rounded-circle mx-auto shadow"
                                                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                                                />
                                            </div>

                                            {/* Client Info */}
                                            <div className="testi-meta">
                                                <h6 className="mb-0 fw-bold">{item.name}</h6>
                                                <p className="text-muted small">{item.role}</p>
                                                <div className="testi-rating text-warning">
                                                    {[...Array(5)].map((_, i) => (
                                                        <span key={i}>
                                                            <i className="fas fa-star"></i>
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Feedback */}
                                        <p className="mt-3 text-secondary fs-6">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </section>


                {/* footer area */}
                <footer
                    className="ht-footer pt-5 pb-4 mt-5 m-0 p-0 position-relative"
                    style={{ backgroundColor: "#FFFAEC" }}
                >
                    {/* Decorative Shapes */}
                    <div
                        className="footer-shapes item-animateTwo  position-absolute w-100 h-100"
                        style={{
                            top: 0,
                            left: 0,
                            zIndex: 0,
                            pointerEvents: "none",
                        }}
                    >
                        <span className="shape shape-1" data-aos="fade-up-right">
                            <img
                                src="src/assets/img/icons/18.png"
                                alt="decor"
                                className="img-fluid"
                                style={{ width: "20vh", position: "absolute", top: "10%", left: "5%" }}
                            />
                        </span>
                        <span className="shape shape-2" data-aos="fade-down-left" data-aos-delay="200">
                            <img
                                src="src/assets/img/icons/16.png"
                                alt="decor"
                                className="img-fluid"
                                style={{ width: "20vh", position: "absolute", bottom: "20%", right: "10%" }}
                            />
                        </span>
                        <span className="shape shape-3" data-aos="zoom-in" data-aos-delay="400">
                            <img
                                src="src/assets/img/icons/8.png"
                                alt="decor"
                                className="img-fluid"
                                style={{ width: "10vh", position: "absolute", top: "50%", right: "30%" }}
                            />
                        </span>
                    </div>

                    {/* Footer Content */}
                    <div className="container position-relative" style={{ zIndex: 1 }}>
                        <div className="ht-footer-top">
                            <div className="row gy-4">
                                {/* Logo & Address */}
                                <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up">
                                    <div className="widget text-center text-sm-start">
                                        <div className="logo mb-3">
                                            <img
                                                src="src/assets/TFC_LOGO_jpeg-01-removebg-preview.png"
                                                alt="Company Logo"
                                                className="img-fluid"
                                                style={{ maxWidth: "350px", height: "auto" }}
                                            />
                                        </div>
                                        <ul className="list-unstyled mb-2">
                                            <li>
                                                570 8th Ave, New York, NY 10018
                                                <br />
                                                United States
                                            </li>
                                        </ul>
                                        <a href="#" className="ht-link d-block">
                                            Google Map
                                        </a>
                                        <div className="social-box mt-3 d-flex justify-content-center justify-content-sm-start gap-2">
                                            <a href="#"><i className="fab fa-facebook"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-youtube"></i></a>
                                            <a href="#"><i className="fab fa-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>

                                {/* Delivery Support */}
                                <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="100">
                                    <div className="widget text-center text-sm-start">
                                        <h6 className="mb-2">Delivery Support</h6>
                                        <h5 className="mb-3">
                                            <i className="fas fa-phone-square-alt me-2"></i>123-59794069
                                        </h5>
                                        <ul className="list-unstyled">
                                            <li>Mon – Fri: 9:00 - 20:00</li>
                                            <li>Saturday: 11:00 – 15:00</li>
                                        </ul>
                                        <a href="mailto:infofoodkahn@gmail.com" className="ht-link d-block mt-2">
                                            Email Address
                                        </a>
                                        <a href="mailto:infofoodkahn@gmail.com" className="ht-email d-block mt-2">
                                            <i className="fas fa-envelope-open-text me-2"></i>
                                            infofoodkahn@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* Information */}
                                <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="200">
                                    <div className="widget text-center text-sm-start">
                                        <h6 className="mb-3">Information</h6>
                                        <ul className="list-unstyled">
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="#">Specialities</a></li>
                                            <li><a href="#">Dishes</a></li>
                                            <li><a href="#">Franchise</a></li>
                                            <li><a href="#">Terms & Conditions</a></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Newsletter */}
                                <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="300">
                                    <div className="widget text-center text-sm-start">
                                        <h6 className="mb-3">Newsletter</h6>

                                        <form
                                            className="newsletter newsletter-3 d-flex flex-wrap"
                                            onSubmit={handleSubmit}
                                        >
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                className="form-control me-2 mb-2"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <button type="submit" className="btn btn-outline-dark mb-2">
                                                <i className="fas fa-paper-plane"></i>
                                            </button>
                                        </form>

                                        {/* Optional: Subscribe button below (can be removed if redundant) */}
                                        <button
                                            onClick={handleSubmit}
                                            className="btn2 mt-2 d-inline-block border-0 bg-transparent text-decoration-underline"
                                        >
                                            Subscribe
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Divider */}
                        <div className="divider my-4">
                            <hr />
                        </div>

                        {/* Footer Bottom */}
                        <div className="ht-footer-bottom">
                            <div className="row align-items-center text-center text-md-end">
                                <div className="col-md-12 mb-2 mb-md-0">
                                    <p className="m-0">
                                        © 2021 <a href="index.html">TFC</a>. All rights reserved.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </footer>
                {/* WhatsApp Floating Button */}
                <a
                    href="https://wa.me/919999999999" // Replace with your WhatsApp number
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        position: "fixed",
                        bottom: "30px",        // Keep WhatsApp button lowest
                        right: "30px",
                        width: "55px",
                        height: "55px",
                        backgroundColor: "#25D366",
                        color: "white",
                        borderRadius: "50%",
                        textAlign: "center",
                        fontSize: "30px",
                        zIndex: 100,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                    }}
                >
                    <i className="fab fa-whatsapp"></i>
                </a>

                {/* Scroll to Top Button */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    style={{
                        position: "fixed",
                        bottom: "100px",       // Position above WhatsApp button
                        right: "30px",
                        width: "45px",
                        height: "45px",
                        backgroundColor: "#ff9900",
                        color: "#fff",
                        border: "none",
                        borderRadius: "50%",
                        fontSize: "20px",
                        cursor: "pointer",
                        zIndex: 999,
                        display: visible ? "flex" : "none",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "opacity 0.3s ease",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                    }}
                >
                    <i className="fas fa-arrow-up"></i>
                </button>






            </div>

        </>
    );
}
export default Home;