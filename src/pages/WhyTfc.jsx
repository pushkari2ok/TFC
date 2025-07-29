const WhyTfc = () => {
  return (
    <>
    
                {/*Why Tfc section */}
                <section className="drink-ind  m-0 p-0 overflow-hidden">
                    <div className="container-fluid px-3">
                        <h1 className="text-center mb-4" data-aos="zoom-in">
                            Why TFC?
                        </h1>

                        <div className="row align-items-center gy-5" >
                            {/* Left Image with Decorative Shapes */}
                            <div
                                className="col-lg-6 col-md-12 p-0 d-flex justify-content-center position-relative"
                                data-aos="fade-right"
                            >
                                <div className="drink-ind-left text-center">
                                    <img
                                        src="/assets/img/OurSpecialitiesimg/why tfc_ (1).png"
                                        alt="Why TFC"
                                        className="img-fluid"
                                        style={{ maxWidth: "100%", height: "auto" }}
                                    />

                                    {/* Decorative Floating and Rotating Shapes */}
                                    <div className="position-absolute item-animateTwo top-0 start-0 w-100 h-100">
                                        <span
                                            className="position-absolute rotating d-none d-md-block"
                                            style={{ bottom: "10%", right: "-30px" }}
                                            data-aos="fade-in"
                                        >
                                            <img
                                                src="/assets/img/icons/17.png"
                                                alt="Rotating Shape"
                                                style={{ width: "80px", height: "80px" }}
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Content */}
                            <div className="col-lg-6 col-md-12" data-aos="fade-left">
                                <div className="drink-ind-right px-3 px-md-4">
                                    <div className="common-title-area3 text-center text-lg-start mb-4">
                                        <h2>
                                            Authenticity Guaranteed:
                                            <br />
                                            Real regional flavors, <span>no gimmicks.</span>
                                        </h2>
                                    </div>

                                    <div className="row g-4">
                                        {/* Feature 1 */}
                                        <div
                                            className="col-12 col-sm-6"
                                            data-aos="fade-up"
                                            data-aos-delay="200"
                                        >
                                            <div className="single-fea d-flex flex-column flex-sm-row align-items-center text-center text-sm-start">
                                                <div className="fea-img mb-3 mb-sm-0 me-sm-3">
                                                    {/* Optional icon or shape */}
                                                </div>
                                                <div className="fea-content">
                                                    <h5>Quality Hops</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Feature 2 */}
                                        <div
                                            className="col-12 col-sm-6"
                                            data-aos="fade-up"
                                            data-aos-delay="300"
                                        >
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
    </>
  );
};

export default WhyTfc;
