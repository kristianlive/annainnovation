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
        För en behandling som kombinerar komfort med högsta kvalitet. Vi erbjuder 2 timmars gratis parkering.
        Boka din tid idag för en skonsam och effektiv hårborttagning.
      </p>
      <p>
        Where does it come from?
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        </p>
      <a href="https://www.bokadirekt.se/places/anna-innovation-vaxning-malmo-52639" className="button">Boka tid</a>
    </div>
  );
}

export default Home;
