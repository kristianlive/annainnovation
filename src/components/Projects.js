import React from 'react';
import './style/Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      
      <h2>Välkommen till oss på Anna Innovation</h2>
      <h3>För en behandling som kombinerar komfort med högsta kvalitet.<br></br> Vi erbjuder 2 timmars gratis parkering. Boka din tid idag för en skonsam och effektiv hårborttagning.</h3>
      <div className="project">
        <h3>Vaxning Brasiliansk - 499 kr</h3>
        <p>Upplev vår professionella brasilianska vaxning. Vår metod är både skonsam och effektiv, och ger ett hållbart resultat för den som föredrar traditionell vaxning.</p>
      </div>
      <div className="project">
        <h3>Laser Brasiliansk - 799 kr</h3>
        <p>För en mer långvarig lösning, prova vår laserbehandling. Den erbjuder en modern teknik för nästan smärtfri och varaktig hårborttagning.</p>
      </div>
      <div className="project">
        <p>För en behandling som kombinerar komfort med högsta kvalitet. Vi erbjuder 2 timmars gratis parkering. Boka din tid idag för en skonsam och effektiv hårborttagning.</p>
        <a href="https://www.bokadirekt.se/places/anna-innovation-vaxning-malmo-52639" className="book-button">Boka tid</a>
      </div>
    </section>
  );
}

export default Projects;
