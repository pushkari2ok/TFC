const FoodBrand = () => {
  return (

    <>
    

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
                                        src="/assets/img/OurSpecialitiesimg/home made masal_ (1).png"
                                        alt="Food Brand Visual"
                                        className="img-fluid" data-aos="fade-right"
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
                                                src="/assets/img/icons/18.png"
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
                                                src="/assets/img/icons/24.png"
                                                alt="Shape 2"
                                                style={{ width: "80px", height: "80px" }}
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section></>
  )
};
export default FoodBrand;