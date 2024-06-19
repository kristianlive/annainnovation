import React from 'react';
import './style/Home.css';
import vaxImage from '../image/vax.jpg';

function Home() {
  return (
    <div className="home">
      <h1>Välkommen till oss på Anna Innovation</h1>
      <p>
        För en behandling som kombinerar komfort med högsta kvalitet.
        Vi erbjuder 2 timmars gratis parkering. Boka din tid idag för en skonsam och effektiv hårborttagning.
      </p>
      <div className="content">
        <div className="services">
          <div className="card service">
            <h2>Vaxning Brasiliansk - 499 kr</h2>
            <p>
              Upplev vår professionella brasilianska vaxning. Vår metod är både skonsam och effektiv,
              och ger ett hållbart resultat för den som föredrar traditionell vaxning.
            </p>
          </div>
          <div className="card service">
            <h2>Laser Brasiliansk - 799 kr</h2>
            <p>
              För en mer långvarig lösning, prova vår laserbehandling. Den erbjuder en modern teknik
              för nästan smärtfri och varaktig hårborttagning.
            </p>
          </div>
        </div>
        <img src={vaxImage} alt="Vaxning" className="home-image" />
      </div>
      <p>
        Vi är stolta över att erbjuda högkvalitativa tjänster inom hårborttagning, som kombinerar modern teknik med professionell expertis. Vårt mål är att ge dig den bästa möjliga upplevelsen i en avslappnande och bekväm miljö.
      </p>
      <h2>Vanliga frågor (FAQ)</h2>
      <div className="faq">
        <div className="faq-item">
          <h3>Hur länge håller resultaten av vaxning?</h3>
          <p>Resultaten av vaxning kan vara i upp till fyra till sex veckor beroende på din hårväxtcykel.</p>
        </div>
        <div className="faq-item">
          <h3>Är laserhårborttagning smärtsam?</h3>
          <p>Laserhårborttagning kan kännas som små stickningar, men de flesta kunder finner behandlingen mycket tolererbar.</p>
        </div>
      </div>
      <a href="https://www.bokadirekt.se/places/anna-innovation-vaxning-malmo-52639" className="button">Boka tid</a>
    </div>
  );
}

export default Home;
