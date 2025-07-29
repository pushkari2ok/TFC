const Drink = () => {
  return (

    <>
                    {/* Drink Section */}
                <section className="drink-ind padding-bottom-90 mt-5 position-relative">
                    <div className="container mt-5">
                        <div className="row align-items-center">
                            {/* Left Image Section */}
                            <div className="col-lg-6 wow fadeInLeft" style={{ position: "relative" }} data-aos="fade-right">
                                <div className="drink-ind-left margin-bottom-30" style={{ position: "relative" }}>
                                    {/* Rotating background circle image */}
                                    <img
                                        className="drs1 item-bounce"
                                        src="/assets/img/Whoweimg/design .png"
                                        alt="htshape20"
                                        style={{
                                            position: "absolute",
                                            top: "15%",
                                            left: "42%",
                                            transform: "translate(-50%, -50%)",
                                            zIndex: 0,
                                            width: "100%",
                                            maxWidth: "900px",
                                            animation: "rotate360 20s linear infinite",
                                        }}
                                    />

                                    {/* Plate Image */}
                                    <img
                                        className="plate-img"
                                        src="/assets/img/Whoweimg/plate.png"
                                        alt="Plate"
                                        style={{
                                            position: "absolute",
                                            zIndex: 2,
                                            width: "100%",
                                            maxWidth: "500px",
                                        }}
                                    />

                                    {/* Additional Decorative Images */}
                                    <img
                                        className="drs2 item-bounce"
                                        src="assets/images/img/htshape21.png"
                                        alt="htshape21"
                                        style={{
                                            position: "relative",
                                            zIndex: 3,
                                            maxWidth: "100%",
                                            width: "80px",
                                        }}
                                    />
                                    <img
                                        className="drs4 item-animateTwo"
                                        src="assets/images/img/htshape2.png"
                                        alt="htshape2"
                                        style={{
                                            position: "relative",
                                            zIndex: 3,
                                            maxWidth: "100%",
                                            width: "80px",
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Right Content Section */}
                            <div className="col-lg-6 wow fadeInRight" data-aos="fade-left">
                                <div className="drink-ind-right">
                                    <div className="common-title-area3 text-center text-md-start">
                                        <h2>
                                            Unmatched Heritage:
                                            <span> Recipes passed down through generations.</span>
                                        </h2>
                                    </div>
                                    <div className="inner-fea">
                                        <div className="row margin-top-30">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="single-fea">
                                                    <div className="fea-img">
                                                        <img src="assets/images/img/htshape3.png" alt="htshape3" style={{ maxWidth: "100%" }} />
                                                    </div>
                                                    <div className="fea-content text-center text-md-start">
                                                        <h5>Quality Hops</h5>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="single-fea">
                                                    <div className="fea-img">
                                                        <img src="assets/images/img/htshape4.png" alt="htshape4" style={{ maxWidth: "100%" }} />
                                                    </div>
                                                    <div className="fea-content text-center text-md-start">
                                                        <h5>Premium Malts</h5>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Positioned Image -100px from container */}
                    <div
                        style={{
                            position: "absolute",
                            right: "-100px",
                            top: "90%",
                            transform: "translateY(-50%)",
                            width: "450px",
                            height: "170px", // Adjust this to show only part of the image
                            overflow: "hidden",
                            zIndex: 1,
                        }}
                        className="extra-right-img-wrapper"
                    >
                        <img
                            src="/assets/img/Whoweimg/design .png"
                            alt="Extra Decoration"
                            style={{
                                width: "100%",
                                height: "auto",
                                display: "block",
                            }}
                        />
                    </div>


                    {/* Rotation Keyframe Style */}
                    <style>
                        {`
            @keyframes rotate360 {
                0% {
                    transform: translate(-50%, -50%) rotate(0deg);
                }
                100% {
                    transform: translate(-50%, -50%) rotate(360deg);
                }
            }

            @media (max-width: 992px) {
                .extra-right-img {
                    display: none; /* Hide on smaller screens */
                }
            }
        `}
                    </style>
                </section></>
  )
};
export default Drink;
