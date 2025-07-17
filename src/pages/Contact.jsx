import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const Contact = () => {
  const formRef = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    const payload = {
      user_name: formData.get("user_name"),
      user_email: formData.get("user_email"),
      user_phone: formData.get("user_phone"),
      user_address: formData.get("user_address"),
      reason: formData.get("reason"),
      message: formData.get("message"),
    };

    try {
      await axios.post("http://localhost:5000/api/contact", payload);
      alert("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error("❌ Error sending contact email:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="contact-section py-5 m-0 p-0" id="contact">
      <h2 className="text-center mb-5 text-uppercase fw-bold" data-aos="fade-down">
        Contact Us
      </h2>
      <div className="container">
        <div className="row g-4 align-items-stretch">
          <div className="col-md-6" data-aos="fade-right">
            <div className="map-container shadow rounded h-100 overflow-hidden">
              <iframe
                title="India Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10924496.858565617!2d68.17664559495101!3d20.593684017123594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff86f20fbbb%3A0xc86cf3fddf6f2e0e!2sIndia!5e0!3m2!1sen!2sin!4v1710427258486!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="col-md-6" data-aos="fade-left">
            <div className="contact-form shadow rounded p-4 bg-white h-100">
              <h3 className="mb-4 text-primary fw-bold">Get in Touch</h3>
              <form ref={formRef} onSubmit={sendEmail}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" name="user_name" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" name="user_email" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" name="user_phone" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <textarea className="form-control" rows="2" name="user_address" required></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Reason</label>
                  <select className="form-select" name="reason" required>
                    <option value="">-- Select Reason --</option>
                    <option value="Enquiry about Franchise">Enquiry about Franchise</option>
                    <option value="Complain">Complain</option>
                    <option value="Suggestion">Suggestion</option>
                    <option value="Party / Celebration Order">Party / Celebration Order</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="3" name="message" required></textarea>
                </div>
                <div className="d-flex flex-column flex-md-row gap-2">
                  <button type="submit" className="btn btn-primary w-100">Submit</button>
                  <a href="tel:+919175339235" className="btn btn-outline-primary w-100">Call Now</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
