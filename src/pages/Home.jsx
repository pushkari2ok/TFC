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
import Header from "../components/Header";
import OurSpecialities from "./OurSpecilities";
import WhoAreWe from "./WhoAreWe";
import WhyTfc from "./WhyTfc";
import FoodBrands from "./FoodBrand";
import FoodBrand from "./FoodBrand";
import Drink from "./Drink";

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
            { name: "Butter Chicken", img: "/assets/img/Exploreitems/unnamed.jpg", badge: "Best Seller" },
            { name: "Paneer Tikka", img: "/assets/img/Exploreitems/paneer tikka.jpg", badge: "Veg" },
            // { name: "Paneer Tikka", img: "/assets/img/WhatsAppimg/WhatsApp Image 2025-07-23 at 5.00.09 PM.jpeg", badge: "Veg" },
            { name: "Paneer Tikka", img: "/assets/img/icons/claydish2.jpg", badge: "Veg" },
            { name: "Paneer Tikka", img: "/assets/img/icons/thaalis1.jpg", badge: "Veg" },
            { name: "Paneer Tikka", img: "/assets/img/icons/thalis2.jpg", badge: "Veg" },
            { name: "Paneer Tikka", img: "/assets/img/icons/thalis4.jpg", badge: "Veg" },
            { name: "Paneer Tikka", img: "/assets/img/WhatsAppimg/WhatsApp Image 2025-07-23 at 5.00.09 PM.jpeg", badge: "Veg" },

            // more...
        ],
        maharashtrian: [
            { name: "Misal Pav", img: "/assets/img/icons/MahThalis.jpg", badge: "Hot" },
            { name: "Puran Poli", img: "/assets/img/icons/puranpolithali.jpg", badge: "Sweet" },
            { name: "Vada Pav", img: "/assets/img/icons/mahthalis2.jpg", badge: "Snack" },
            { name: "Vada Pav", img: "/assets/img/icons/Mahthalis3.jpg", badge: "Snack" },
            { name: "Vada Pav", img: "/assets/img/icons/Mahthalis4.jpg", badge: "Snack" },
            { name: "Vada Pav", img: "/assets/img/icons/mahthalis5.jpg", badge: "Snack" },
            // { name: "Vada Pav", img: "/assets/img/Exploreitems/vadapav.png", badge: "Snack" },
            // { name: "Vada Pav", img: "/assets/img/Exploreitems/vadapav.png", badge: "Snack" },
            // { name: "Vada Pav", img: "/assets/img/Exploreitems/vadapav.png", badge: "Snack" },
            // { name: "Vada Pav", img: "/assets/img/Exploreitems/vadapav.png", badge: "Snack" },
            // { name: "Vada Pav", img: "/assets/img/Exploreitems/vadapav.png", badge: "Snack" },

            // more...
        ],
        punjabi: [
            { name: "Chole Bhature", img: "/assets/img/icons/Punjabthalis1.jpg", badge: "Spicy" },
            { name: "Rajma Chawal", img: "/assets/img/icons/punjabthalis2.jpg", badge: "Classic" },
            { name: "Rajma Chawal", img: "/assets/img/icons/punjabthalis3.jpg", badge: "Classic" },
            { name: "Rajma Chawal", img: "/assets/img/icons/punjabthalis4.jpg", badge: "Classic" },
            { name: "Rajma Chawal", img: "/assets/img/icons/punjabthalis5.jpg", badge: "Classic" },
            { name: "Rajma Chawal", img: "/assets/img/icons/punjabthalis6.jpg", badge: "Classic" },
            { name: "Rajma Chawal", img: "/assets/img/icons/punjabthalis7.jpg", badge: "Classic" },
            { name: "Rajma Chawal", img: "/assets/img/icons/punjabthalis8.jpg", badge: "Classic" },
            { name: "Rajma Chawal", img: "/assets/img/icons/rajmapunjab.jpg", badge: "Classic", price: "₹100" },

            // more...
        ]
    };

    
    const items = [
        {
            img: '/assets/img/Exploreitems/htshape12.png',
            title: 'Gunna Can',
            desc: 'It is a long established fact that a reader BBQ Chicken.',
            price: '$50.00',
            badge: 'hot',
        },
        {
            img: '/assets/img/Exploreitems/htshape13.png',
            title: 'Dr Pepper Can',
            desc: 'It is a long established fact that a reader BBQ Chicken.',
            price: '$50.00',
            badge: '',
        },
        {
            img: '/assets/img/Exploreitems/htshape14.png',
            title: 'Ocem Blue',
            desc: 'It is a long established fact that a reader BBQ Chicken.',
            price: '$50.00',
            badge: 'new',
        },
        {
            img: '/assets/img/Exploreitems/htshape15.png',
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


               <Header/>

                {/* burger-promo-area */}
             <section
  className="delivery-area burger-promo-area position-relative overflow-hidden m-0 p-0 d-flex align-items-center"
  style={{
    backgroundImage: "url('/assets/img/WhatsAppimg/WhatsApp Image 2025-07-22 at 5.29.37 PM.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
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
      src="/assets/img/icons/1.png"
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
      src="/assets/img/icons/14.png"
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
      src="/assets/img/icons/24.png"
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
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center" data-aos="fade-right">
        <div className="delivery-right text-start px-3 px-sm-4">
          <div className="common-title-area pb-4">
            <h3 className="text-uppercase text-danger fs-6">Best in Town</h3>
            <h1 className="fw-bold display-6 text-white">
              Slow-Cooked Perfection <span className="text-primary">./Family</span> Recipes, Shared
            </h1>
            <h5 className="my-3 text-light small">bacon - potatoes - bbq sauce</h5>
            <div className="order-box d-flex align-items-center flex-wrap gap-3">
              <a href="shopping-cart.html" className="btn btn-danger">
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






                <OurSpecialities/>





<WhoAreWe/>





<WhyTfc/>






<FoodBrand/>





<Drink/>               





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
                                        src="/assets/img/OurSpecialitiesimg/thali .png"
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
                                                src="/assets/img/Exploreitems/Untitled_design__1_-removebg-preview.png"
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
                                                src="/assets/img/Exploreitems/Untitled_design-removebg-preview.png"
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
                                        src="/assets/img/OurSpecialitiesimg/family.png"
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
                                            src="/assets/img/icons/12.png"
                                            alt="shape1"
                                            style={{ height: "80px", width: "80px" }}
                                        />
                                    </span>
                                    <span
                                        className="fs-2 item-animateTwo position-absolute"
                                        style={{ bottom: "10px", right: "10px" }}
                                    >
                                        <img
                                            src="/assets/img/icons/9.png"
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
                                            src="/assets/img/icons/17.png"
                                            alt="shape3"
                                            style={{ height: "70px", width: "70px" }}
                                        />
                                    </span>
                                    <span
                                        className="fs-4 item-animateTwo position-absolute"
                                        style={{ top: "10px", right: "30%" }}
                                    >
                                        <img
                                            src="/assets/img/icons/16.png"
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
                                                        src="/assets/img/icons/why tfc_.png"
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
                                                        src="/assets/img/htshape4.png"
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
                            <img src="/assets/img/icons/9.png" alt="shape1" style={{ height: "100px", width: "100px", marginTop: "10px" }} />
                        </span>
                        <span className="fs-2">
                            <img src="/assets/img/icons/8.png" alt="shape2" style={{ height: "100px", width: "100px", marginTop: "10px" }} />
                        </span>
                        <span className="fs-3 item-animateTwo">
                            <img src="/assets/img/icons/13.png" alt="shape3" style={{ height: "100px", width: "100px", marginTop: "10px" }} />
                        </span>
                        <span className="fs-4">
                            <img src="/assets/img/icons/14.png" alt="shape4" style={{ height: "100px", width: "100px", marginTop: "10px" }} />
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
                                        Hotel TFC was born from a deep love for authentic Indian cuisine — especially the bold, soulful flavors of Maharashtrian non-veg dishes. While Punjabi food gained national fame, I felt our rich mutton recipes remained unsung.
                                        Inspired by childhood memories of home-cooked meals, slow-cooked masalas, and family traditions, TFC is my tribute to that culinary heritage. More than just a restaurant, it’s a place where culture meets flavor — where every dish tells a story and brings people together.
                                    </p>

                                    <h2 className="my-4">
                                        The Heartbeat of Indapur's <span className="text-highlight">Heritage Cuisine</span>
                                    </h2>

                                    {/* Quote Box */}
                                    <div className="quote-box d-flex align-items-center gap-3 my-4" data-aos="zoom-in">
                                        <span className="qq fs-3 text-primary"><i className="fas fa-quote-right"></i></span>

                                        <div className="quote-img">
                                            <img src="/assets/img/h31.png" alt="Quote" className="img-fluid" />
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
                                <img src="/assets/img/OurSpecialitiesimg/our story .png" alt="" style={{ height: "100vh", width: "110vh" }} />
                                {/* <div className="row g-3">
                                    {[
                                        "htimg3.png",
                                        "htimg1.jpg",
                                        "htimg2.jpg",
                                        "htimg4.png"
                                    ].map((img, index) => (
                                        <div className="col-6" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                                            <img
                                                src={`/assets/img/Whoweimg/${img}`}
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
                <section className="banner-gallery banner-gallery2 overflow-hidden padding-top-120 padding-bottom-60">
                    <h1 className="text-center mb-5" data-aos="zoom-in">Our Ambience </h1>
                    <div className="container position-relative">
                        {/* Decorative Shapes */}
                        <div className="del-shapes">
                            <span className="ds-1 item-bounce">
                                <img src="assets/images/shapes/26.png" alt="Shape 26" />
                            </span>
                            <span className="ds-2 item-bounce">
                                <img src="assets/images/shapes/28.png" alt="Shape 28" />
                            </span>
                        </div>

                        {/* First Row */}
                        <div className="row">
                            <div className="col-lg-6 col-md-12 mb-4" data-aos="fade-up">
                                <div className="gallery-img-1" style={{ backgroundImage: "url('/assets/img/OurSpecialitiesimg/ambience 5.jpg" }}>
                                    <h3>Buzzed Burger</h3>
                                    <p>Sale off 50% only this week</p>
                                    <a href="shopping-cart.html" className="btn">Order Now</a>
                                    {/* <img className="pos1" src="assets/images/shapes/bbr.png" alt="Buzzed Burger" /> */}
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4" data-aos="zoom-in">
                                <div className="gallery-img-3" style={{ backgroundImage: "url('/assets/img/OurSpecialitiesimg/ambience 2.jpg" }}>
                                    <h5>
                                        Super<br />
                                        Delicious<br />
                                        Burger
                                    </h5>
                                    <a href="shopping-cart.html">Order Now</a>
                                    {/* <img className="img-pos" src="assets/images/gallery/grid1.png" alt="Burger Grid 1" />
                                    <img src="assets/images/shapes/41.png" alt="Shape 41" className="s1" /> */}
                                    <span className="gprice-2">$15</span>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-left">
                                <div className="gallery-img-2 d-flex justify-content-end" style={{ backgroundImage: "url('/assets/img/OurSpecialitiesimg/ambience 3 .jpg')" }}>
                                    <img className="img-pos1" src="assets/images/gallery/grid2.png" alt="Burger Grid 2" />
                                    <span className="gprice-1">$15</span>
                                    <div className="gimg-content">
                                        <h5 className="margin-bottom-20">
                                            Delicious<br />
                                            Burger
                                        </h5>
                                        <a href="shopping-cart.html">Order Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Row */}
                        <div className="row margin-top-30" >
                            <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up">
                                <div className="gallery-img-3 gallery-img-33" style={{ backgroundImage: "url('/assets/img/OurSpecialitiesimg/ambience 7.jpg')" }}>
                                    <h5>
                                        Super<br />
                                        Combo<br />
                                        Burger
                                    </h5>
                                    <a href="shopping-cart.html">Order Now</a>
                                    <img src="assets/images/gallery/grid4.png" alt="Burger Grid 4" className="img-pos" />
                                    <img src="assets/images/shapes/41.png" alt="Shape 41" className="s1" />
                                    <span className="gprice-2">$15</span>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up">
                                <div className="gallery-img-22 d-flex justify-content-end" style={{ backgroundImage: "url('/assets/img/OurSpecialitiesimg/ambience 1.jpg')" }}>
                                    <img className="img-pos" src="assets/images/gallery/grid5.png" alt="Burger Grid 5" />
                                    <span className="gprice-1">$15</span>
                                    <div className="gimg-content">
                                        <h5 className="margin-bottom-20">
                                            Super<br />
                                            Delicious<br />
                                            Burger
                                        </h5>
                                        <a href="shopping-cart.html">Order Now</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12 mb-4" data-aos="zoom-in">
                                <div className="gallery-img-1 gallery-img-11 gallery-img-01" style={{ backgroundImage: "url('/assets/img/OurSpecialitiesimg/ambience 9.jpg')" }}>
                                    <h5 className="margin-bottom-10">
                                        Chicken<br />
                                        Combo<br />
                                        Burger
                                    </h5>
                                    <p>Sale off 50% only this week</p>
                                    <a href="shopping-cart.html" className="btn">Order Now</a>
                                    {/* <img className="gs1" src="assets/images/shapes/bbs.png" alt="Chicken Combo" />
                                    <img className="pbadge" src="assets/images/icons/pbadge.png" alt="Badge" /> */}
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
                                src="/assets/img/icons/18.png"
                                alt="decor"
                                className="img-fluid"
                                style={{ width: "20vh", position: "absolute", top: "10%", left: "5%" }}
                            />
                        </span>
                        <span className="shape shape-2" data-aos="fade-down-left" data-aos-delay="200">
                            <img
                                src="/assets/img/icons/16.png"
                                alt="decor"
                                className="img-fluid"
                                style={{ width: "20vh", position: "absolute", bottom: "20%", right: "10%" }}
                            />
                        </span>
                        <span className="shape shape-3" data-aos="zoom-in" data-aos-delay="400">
                            <img
                                src="/assets/img/icons/8.png"
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