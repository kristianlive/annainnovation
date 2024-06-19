import React from 'react';
import './style/Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h1>Kontakt</h1>
      <div className="contact-info">
        <p><strong>Email:</strong> <a href="mailto:gshneltser@hotmail.com">gshneltser@hotmail.com</a></p>
        <p><strong>Telefon:</strong> <a href="tel:+46704828033">0704828033</a></p>
        <p><strong>Adress:</strong> Stora Varvsgatan 24 C, 21111, Malmö</p>
      </div>
      <div className="opening-hours">
        <h2>Öppettider</h2>
        <ul>
          <li><strong>Mån:</strong> 10:00 - 18:00</li>
          <li><strong>Tis:</strong> 10:00 - 18:00</li>
          <li><strong>Ons:</strong> 10:00 - 18:00</li>
          <li><strong>Tor:</strong> 10:00 - 18:00</li>
          <li><strong>Fre:</strong> 10:00 - 18:00</li>
          <li><strong>Lör:</strong> 10:00 - 18:00</li>
          <li><strong>Sön:</strong> 10:00 - 18:00</li>
        </ul>
      </div>
      <div className="map">
        <h2>Hitta oss</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.877137142042!2d15.588743215800527!3d56.16156144237367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653ab7e6b2a5f7f%3A0x74d9e2a0b95f6650!2sStora%20Varvsgatan%2024%2C%20211%2011%20Malm%C3%B6%2C%20Sweden!5e0!3m2!1sen!2sus!4v1654554054853!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
