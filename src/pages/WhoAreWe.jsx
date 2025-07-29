
const WhoAreWe = () => {
  return (
    <>
    

                {/*Who Are We */}
                <section className="softdrink-section padding-bottom-80 position-relative overflow-hidden w-100" id="about-us">
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
                            zIndex: 0,
                        }}
                    >
                        <img
                            src="/assets/img/icons/21.png"
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
                            src="/assets/img/icons/2.png"
                            alt="leaf"
                            style={{
                                position: "absolute",
                                width: "15vh",
                                height: "auto",
                                top: "40%",
                                right: "5%",
                                opacity: 0.8,
                                animation: "float2 6s ease-in-out infinite",
                                animationDelay: "1.5s",
                                zIndex: 1000,
                            }}
                        />
                        <img
                            src="/assets/img/icons/5.png"
                            alt="leaf"
                            style={{
                                position: "absolute",
                                width: "12vh",
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
                        <h1 className="text-center mb-5" data-aos="fade-up">
                            Who Are We
                        </h1>
                        <div className="row pb-5 d-flex align-items-center">
                            {/* Left Content */}
                            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0" data-aos="fade-right">
                                <div className="softdrink-right pe-lg-5">
                                    <p>
                                        Hotel TFC brings the rich flavors of Maharashtra and Punjab to the heart of Indapur. We serve authentic vegetarian and non-vegetarian dishes in a warm, welcoming setting. At TFC, food is more than a meal — it's an experience rooted in tradition.
                                    </p>
                                    <h2>
                                        The Heartbeat of Indapur's <span>Heritage Cuisine</span>
                                    </h2>
                                    <div className="quote-box d-flex align-items-center flex-wrap" data-aos="zoom-in">
                                        <span className="qq me-2">
                                            <i className="fas fa-quote-right"></i>
                                        </span>
                                        <div className="qoute-img me-3">
                                            <img
                                                src="/assets/img/icons/11.png"
                                                className="item-animateTwo"
                                                alt="decorative"
                                                style={{ width: "50px" }}
                                            />
                                        </div>
                                        <div className="quote-content">
                                            <h5>The Heartbeat of Indapur's Heritage Cuisine.</h5>
                                            <p>Washington Irving</p>
                                        </div>
                                    </div>
                                    <a href="shopping-cart.html" className="btn2 mt-3" data-aos="fade-up">
                                        Shop Now
                                    </a>
                                </div>
                            </div>

                            {/* Right Image Grid */}
                            <div className="col-lg-6 col-md-12 text-center" data-aos="fade-left">
                                <img
                                    src="/assets/img/OurSpecialitiesimg/who are we_ (1).png"
                                    alt="Who Are We"
                                    className="img-fluid"
                                    style={{ maxWidth: "100%", height: "auto" }}
                                />
                            </div>
                        </div>

                        {/* ✅ Decorative Animated Background Shapes */}
                        <div className="decorative-shapes position-absolute item-animateTwo top-0 start-0 w-100 h-100">
                            <span className="position-absolute floating" style={{ top: "20%", left: "-40px" }}>
                                <img
                                    src="/assets/img/icons/8.png"
                                    alt="Decorative Left"
                                    style={{ width: "60px", height: "60px" }}
                                />
                            </span>
                            <span className="position-absolute rotating" style={{ bottom: "10%", right: "30px" }}>
                                <img
                                    src="/assets/img/icons/10.png"
                                    alt="Decorative Right"
                                    style={{ width: "80px", height: "80px" }}
                                />
                            </span>
                        </div>
                    </div>
                </section>
    </>
  );
};
export default WhoAreWe;