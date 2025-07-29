
const OurSpecialities = () => {
  return (
    <>
    {/* Our Specilities */}

                <section className="banner-gallery banner-gallery2 overflow-hidden padding-top-80 padding-bottom-60">
                    <h1 className="text-center mb-5" data-aos="zoom-in">Our Specilities</h1>
                    <div className="container position-relative">
                        {/* Decorative Shapes */}
                        <div className="del-shapes">
                            <span className="ds-1 item-bounce">
                                <img src="/assets/img/shapes/26.png" alt="shape-1" />
                            </span>
                            <span className="ds-2 item-bounce">
                                <img src="/assets/img/shapes/28.png" alt="shape-2" />
                            </span>
                        </div>

                        {/* First Row */}
                        <div className="row">
                            <div className="col-lg-6 col-md-12" >
                                <div className="gallery-img-1" style={{ backgroundImage: "url('src/assets/img/WhatsAppimg/WhatsApp Image 2025-07-22 at 9.05.07 PM (1).jpeg" }} >
                                    <h3>Authenticity Over Trends</h3>
                                    <p>Sale off 50% only this week</p>
                                    <a href="shopping-cart.html" className="btn">Order Now</a>
                                    {/* <img className="pos1" src="/assets/img/shapes/bbr.png" alt="Buzzed Burger" /> */}
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="gallery-img-3" style={{ backgroundImage: "url('src/assets/img/WhatsAppimg/WhatsApp Image 2025-07-22 at 9.05.06 PM (2).jpeg" }}>
                                    <h5>
                                        Home-Made<br />
                                        Masalas

                                    </h5>
                                    <a href="shopping-cart.html">Order Now</a>
                                    {/* <img className="img-pos" src="/assets/img/gallery/grid1.png" alt="Burger Grid 1" />
                                    <img src="/assets/img/shapes/41.png" alt="Shape 41" className="s1" /> */}
                                    <span className="gprice-2">$15</span>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="gallery-img-2 d-flex justify-content-end" style={{ backgroundImage: "url('src/assets/img/WhatsAppimg/WhatsApp Image 2025-07-22 at 9.05.06 PM (1).jpeg" }}>
                                    <img className="img-pos1" src="/assets/img/gallery/grid2.png" alt="Burger Grid 2" />
                                    <span className="gprice-1">$15</span>
                                    <div className="gimg-content">
                                        <h5 className="margin-bottom-20">
                                            Home-Made<br />
                                            Masalas
                                        </h5>
                                        <a href="shopping-cart.html">Order Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>





                        {/* Second Row */}
                        <div className="row margin-top-30">
                            <div className="col-lg-3 col-md-6">
                                <div className="gallery-img-3 gallery-img-33" style={{ backgroundImage: "url('src/assets/img/WhatsAppimg/WhatsApp Image 2025-07-22 at 9.05.06 PM.jpeg" }}>
                                    <h5>
                                        Hearty<br />
                                        Vegetaria<br />
                                        n Staples
                                    </h5>
                                    <a href="shopping-cart.html">Order Now</a>
                                    {/* <img src="/assets/img/gallery/grid4.png" alt="Burger Grid 4" className="img-pos" />
                                    <img src="/assets/img/shapes/41.png" alt="Shape 41" className="s1" /> */}
                                    <span className="gprice-2">$15</span>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="gallery-img-22 d-flex justify-content-end" style={{ backgroundImage: "url('src/assets/img/WhatsAppimg/cooking.jpg" }}>
                                    <img className="img-pos" src="/assets/img/gallery/grid5.png" alt="Burger Grid 5" />
                                    <span className="gprice-1">$15</span>
                                    <div className="gimg-content">
                                        <h5 className="margin-bottom-20">
                                            Beloved<br />
                                            Punjabi<br />
                                            Favourites
                                        </h5>
                                        {/* <img src="/assets/img/shapes/42.png" alt="Shape 42" className="s1" /> */}
                                        <a href="shopping-cart.html">Order Now</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="gallery-img-1 gallery-img-11 gallery-img-01" style={{ backgroundImage: "url('src/assets/img/WhatsAppimg/WhatsApp Image 2025-07-22 at 9.05.07 PM.jpeg" }}>
                                    <h5 className="margin-bottom-10">
                                        Rich<br />
                                        Maharashtrian <br />
                                        Non-Veg <br />
                                        Specials
                                    </h5>
                                    <p>Sale off 50% only this week</p>
                                    <a href="shopping-cart.html" className="btn">Order Now</a>
                                    {/* <img className="gs1" src="/assets/img/shapes/bbs.png" alt="Chicken Combo" />
                                    <img className="pbadge" src="/assets/img/icons/pbadge.png" alt="Badge" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


    </>
  );
};

export default OurSpecialities;
