import React from 'react';
import './style/About.css';

function About() {
  return (
<section id="about" className="about">
  <div className="container">
    <h2 className="about-heading">Om mig</h2>
    <p className="about-text">
      Jag är certifierad och specialiserad inom behandlingar som vaxning och laserbehandling. Med snart 7 års erfarenhet i branschen har jag haft glädjen att hjälpa många kunder och fått mycket positiv feedback för mina behandlingar. 
    </p>
    <p className="about-text">
      För mig är kundens välmående alltid i fokus, och jag värdesätter att varje behandling sker i en trygg och behaglig miljö. Jag brinner för att erbjuda service med vänlighet, omtanke och professionalitet.
    </p>
    <p className="about-text">
      Min målsättning är att ge dig den bästa möjliga upplevelsen och att du ska känna dig nöjd och omhändertagen efter varje behandling. Välkommen att boka din tid hos mig!
    </p>
  </div>
</section>

  );
}

export default About;
