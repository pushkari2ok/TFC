import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './FranchiseForm.css';

const FranchiseForm = () => {
  const initialState = {
    name: '',
    contact: '',
    email: '',
    area: '',
    address: '',
    message: '',
    budget: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData(initialState);
      } else {
        alert(result.message || 'Failed to send email.');
      }
    } catch (error) {
      console.error('Email send error:', error);
      alert('Error occurred. Try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="container-fluid m-0 p-0"  id="franchise">
      <h1 className="text-center ">Franchise Opportunity</h1>
      <div className="franchise-container">
        <div className="franchise-left" data-aos="fade-right">
          <img src="src/assets/img/Whoweimg/tfc hotel.png" alt="Franchise" className="outlet-img"  />
        </div>

        <div className="franchise-right" data-aos="fade-left">
          <h2>Get a Franchise</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="tel" name="contact" placeholder="Contact Number" value={formData.contact} onChange={handleChange} required pattern="[0-9]{10}" />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <input type="text" name="area" placeholder="Area for CSB outlet?" value={formData.area} onChange={handleChange} required />
            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
            <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} rows="3" />
            <select name="budget" value={formData.budget} onChange={handleChange} required>
              <option value="" disabled>-- Select Budget --</option>
              <option value="15-20 Lacs">Budget Rs. 15-20 Lacs</option>
              <option value="20-22 Lacs">Budget Rs. 20-22 Lacs</option>
              <option value="22-25 Lacs">Budget Rs. 22-25 Lacs</option>
              <option value="25-30 Lacs">Budget Rs. 25-30 Lacs</option>
            </select>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'SEND'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FranchiseForm;
