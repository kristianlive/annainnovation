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
    </div>
  );
}

export default Contact;
