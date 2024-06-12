import React from 'react';
import './style/Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Välkommen till oss på Anna Innovation</h1>
      <p>
        För en behandling som kombinerar komfort med högsta kvalitet.
        Vi erbjuder 2 timmars gratis parkering. Boka din tid idag för en skonsam och effektiv hårborttagning.
      </p>
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
      <p>
        För en behandling som kombinerar komfort med högsta kvalitet. Vi erbjuder 2 timmars gratis parkering.
        Boka din tid idag för en skonsam och effektiv hårborttagning.
      </p>
      <a href="https://www.bokadirekt.se/places/anna-innovation-vaxning-malmo-52639" className="button">Boka tid</a>
    </div>
  );
}

export default Home;
