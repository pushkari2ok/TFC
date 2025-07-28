import React, { useEffect, useState } from 'react';
import './WhyWeRock.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaUtensils, FaChalkboardTeacher, FaRegHandshake, FaUserTie, FaUserFriends } from "react-icons/fa";
import { MdOutlineSupportAgent, MdLocalShipping, MdOutlineHowToVote } from "react-icons/md";
import { BiCheckShield } from "react-icons/bi";
import { GiCookingPot, GiMeal } from "react-icons/gi";
import { RiBuilding2Fill, RiTeamFill } from "react-icons/ri";


const WhyWeRock = () => {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="why-we-rock py-5">
      <div className="container">
        <h2 className="title text-center mb-5" data-aos="fade-down">
          Why We Rock?
        </h2>

        <div className="row g-4 align-items-start">
          {/* Left Column */}
          <div className="col-lg-6 col-md-12" data-aos="fade-right">
            <p className="fs-6">
              <strong>FRANCHISE</strong><br />
              Grow with Hotel TFC – Bring Authentic Flavors to Your City!
              <br /><br />
              Are you passionate about traditional Indian cuisine and looking for a rewarding business opportunity?
              Hotel TFC is expanding, and we invite enthusiastic entrepreneurs to join our family through our franchise program.
              <br /><br />
              We've built a strong foundation on authenticity, quality, and a beloved brand. Our proven operational model,
              distinct culinary philosophy, and loyal customer base make Hotel TFC an attractive venture.
              <br /><br />
              <strong>By partnering with us, you'll gain:</strong><br />
              ✅ A Trusted Brand: Leverage the reputation of Hotel TFC – Traditional Food Company.<br />
              ✅ Authentic Recipes: Access to our secret, generational recipes and homemade masala blends.<br />
              ✅ Comprehensive Training: Full support in kitchen operations, staff training, and customer service.<br />
              ✅ Marketing & Operational Support: Guidance to help you establish and grow your franchise successfully.
              <br /><br />
              Become a part of our story and share the true taste of heritage with your community.<br />
              <strong>Partner with a Legacy, Taste the Success.</strong><br />
              To learn more, contact us at <a href="mailto:divyagate543@gmail.com">divyagate543@gmail.com</a>
            </p>
          </div>

          {/* Right Column */}
          <div className="col-lg-6 col-md-12 rock-content" data-aos="fade-left">
            {/* Image */}
            <div
              className="left-img mb-4"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="src/assets/img/Whoweimg/IMG_2853.PNG"
                alt="Founders"
                style={{
                  width: "40%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "10px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>


            {/* Feature List */}
            <div className="right-features">
              {[
                {
                  title: 'Target Audience',
                  text: 'We are a major attraction for youths who are spending more than 6,00,000 minutes in our outlets...',
                },
                {
                  title: 'Prominence',
                  text: 'We have been covered by major media houses with our success story...',
                },
                {
                  title: 'Fresh Concept',
                  text: 'Our concept of ‘Taste The Kulhad Chai’ in a bar-like setting...',
                },
                {
                  title: 'Brand Value',
                  text: 'Chai Sutta Bar has grown into a brand that resonates with youth...',
                },
              ].map((feature, idx) => (
                <div className="feature mb-4" key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
                  <h5 className="fw-bold">{feature.title}</h5>
                  <p>{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* See More Button */}
        <div className="see-more-wrapper mt-5" data-aos="fade-up">
          <button
            className="see-more-btn"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'See Less' : 'See More'}
          </button>
        </div>

        {/* Dummy Extra Content */}
        {showMore && (
          <div className="more-content mt-4" data-aos="fade-up">
            <h2 className="text-center fw-bold mb-4"><FaUtensils className="me-2 text-danger" />More About Us</h2>

            <p className="text-center text-muted mb-5">
              Partner with <strong>Hotel TFC</strong> as Your Exclusive Franchise Development Partner. Join the movement to popularize authentic Maharashtrian and Punjabi home-style cuisine with a business model rooted in tradition and growth.
            </p>

            {/* Franchise Opportunity */}
            <div className="mb-5">
              <h4 className="fw-bold mb-3"><FaRegHandshake className="me-2 text-success" />Franchise Opportunity</h4>
              <ul className="list-unstyled ms-3">
                <li>✔️ Authentic Indian cuisine franchise options</li>
                <li>✔️ Affordable food business models</li>
                <li>✔️ Home-style cooking with ancestral recipes</li>
                <li>✔️ Support in chulha-based cooking methods</li>
                <li>✔️ Proven success in traditional Indian food markets</li>
              </ul>
            </div>

            {/* Target Franchisee */}
            <div className="mb-5">
              <h4 className="fw-bold mb-3"><FaUserTie className="me-2 text-primary" />Who We’re Looking For</h4>
              <ul className="list-unstyled ms-3">
                <li>🔹 Value authentic Indian cooking</li>
                <li>🔹 Embrace traditional methods like chulha</li>
                <li>🔹 Prioritize customer experience and expansion</li>
                <li>🔹 Seek sustainable food business opportunities</li>
              </ul>
            </div>

            {/* Support System */}
            <div className="mb-5">
              <h4 className="fw-bold mb-3"><MdOutlineSupportAgent className="me-2 text-warning" />Support We Provide</h4>
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-unstyled ms-2">
                    <li><FaUserFriends className="me-2 text-info" />Staff Recruitment & Training</li>
                    <li><RiBuilding2Fill className="me-2 text-secondary" />Project Design & Architect Support</li>
                    <li><MdLocalShipping className="me-2 text-danger" />Supply Chain & Logistics</li>
                    <li><GiCookingPot className="me-2 text-success" />In-House Masala Supply</li>
                    <li><MdOutlineHowToVote className="me-2 text-dark" />Licensing & Documentation</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled ms-2">
                    <li><BiCheckShield className="me-2 text-primary" />Quality Check Audits</li>
                    <li><GiMeal className="me-2 text-success" />Healthy & Nutritious Cooking</li>
                    <li><FaUserFriends className="me-2 text-info" />Local Vendor Tie-ups</li>
                    <li><RiTeamFill className="me-2 text-warning" />Event & Corporate Tie-ups</li>
                    <li><FaChalkboardTeacher className="me-2 text-danger" />Ongoing Training Support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Brand & Marketing */}
            <div className="mb-5">
              <h4 className="fw-bold mb-3"><BiCheckShield className="me-2 text-primary" />Brand Identity & Marketing</h4>
              <ul className="list-unstyled ms-3">
                <li>🎯 Public relations & social media planning</li>
                <li>🎯 Cross-marketing with other brands</li>
                <li>🎯 Strong and growing brand identity</li>
              </ul>
            </div>

            {/* Final CTA */}
            <div className="text-center mt-5">
              <h5 className="fw-bold"><FaUtensils className="me-2 text-danger" />Why Choose Hotel TFC?</h5>
              <p className="text-muted">
                Join a brand that blends heritage with modern hospitality. With our full-spectrum support, make your mark in India's food franchise revolution.
              </p>
            </div>
          </div>

        )}
      </div>
    </section>
  );
};

export default WhyWeRock;
