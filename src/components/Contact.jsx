import React from "react";

import "../styles/Contact.css";

const ContactMe = () => {
    return (
      <div className="contact-container">
        <iframe
          className="contact-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255203.6053330455!2d29.962083853163374!3d-1.9294194144065173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411d0bc8!2sKigali!5e0!3m2!1sen!2srw!4v1738915143811!5m2!1sen!2srw"
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
  
        <div className="contact-details">
          <div className="contact-left">
            <h2>Leave Us a Message</h2>
            <form>
              <label>Name <span>*</span></label>
              <div className="name-fields">
                <input type="text" placeholder="First" required />
                <input type="text" placeholder="Last" required />
              </div>
  
              <label>Email <span>*</span></label>
              <input type="email" placeholder="Enter your email" required />
  
              <label>Comment or Message</label>
              <textarea placeholder="Write your message"></textarea>
  
              <button type="submit" className="submit-btn">SUBMIT</button>
            </form>
          </div>
  
          <div className="contact-right">
            <h2>Our Store</h2>
            <p>501-521 kIYOVU Ave, Kigali, KG 668St, RWANDA</p>
            <p><strong>PHONE:</strong> +250 781 234 567</p>
            <p><strong>E-MAIL:</strong> office@example.org</p>
  
            <h2>Store Hours</h2>
            <p>Sun: Closed</p>
            <p>Mon to Sat: 10 AM – 5:30 PM</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactMe;