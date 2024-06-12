import React from 'react';
import './style/VaraTjanster.css';

function Projects() {
  return (
    <div className="projects">
      <h1>Behandlingsmetoder:</h1>
      <div className="project">
        <h2>Laserhårborttagning</h2>
        <p>
          Laserhårborttagning är en medicinsk procedur som använder en koncentrerad ljusstråle (laser) för att ta bort oönskat hår.
          Under laserhårborttagningen avger en laser ljus som absorberas av pigmentet (melanin) i håret. Ljuset omvandlas till värme,
          vilket skadar hårsäckarna som producerar hårstrån. Denna skada hämmar eller fördröjer framtida hårväxt.
        </p>
        <h3>Fördelar</h3>
        <ul>
          <li>Permanent hårreducering</li>
          <li>Mindre smärtsamt jämfört med vaxning</li>
          <li>Snabb behandlingstid för mindre områden</li>
          <li>Minskad risk för inåtväxande hårstrån</li>
        </ul>
        <h3>Nackdelar</h3>
        <ul>
          <li>Kan kräva flera behandlingar för bästa resultat</li>
          <li>Högre kostnad jämfört med andra metoder</li>
          <li>Kan vara obekvämt under behandlingen</li>
          <li>Risk för hudirritation och tillfällig rodnad</li>
        </ul>
      </div>
      <div className="project">
        <h2>Vaxning</h2>
        <p>
          Vaxning är en metod för att ta bort hår från roten genom att applicera vax på huden och sedan dra bort det tillsammans med hårstråna.
          Vaxning kan utföras på nästan alla delar av kroppen, inklusive ansikte, armar, ben, bikinilinje och rygg.
        </p>
        <h3>Fördelar</h3>
        <ul>
          <li>Håret växer långsammare jämfört med rakning</li>
          <li>Slätare hud efter behandling</li>
          <li>Kan utföras hemma eller på salong</li>
          <li>Effektiv för att ta bort stora mängder hår samtidigt</li>
        </ul>
        <h3>Nackdelar</h3>
        <ul>
          <li>Smärtsamt, särskilt för känsliga områden</li>
          <li>Risk för inåtväxande hårstrån</li>
          <li>Kan orsaka hudirritation och rodnad</li>
          <li>Behöver upprepas var 3-6 vecka för bästa resultat</li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
