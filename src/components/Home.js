import React, { useState } from 'react';
import './style/Home.css';
import vaxImage from '../image/vax10.jpg';

function Home({ isAuthenticated }) {
  const [openQuestion, setOpenQuestion] = useState(null);

  const [editableText, setEditableText] = useState(localStorage.getItem('editableText') || 'Välkommen till oss på Anna Innovation');
  const [paragraphText, setParagraphText] = useState(localStorage.getItem('paragraphText') || 'För en behandling som kombinerar komfort med högsta kvalitet. Vi erbjuder 2 timmars gratis parkering. Boka din tid idag för en skonsam och effektiv hårborttagning.');
  const [service1Text, setService1Text] = useState(localStorage.getItem('service1Text') || 'Upplev vår professionella brasilianska vaxning. Vår metod är både skonsam och effektiv, och ger ett hållbart resultat för den som föredrar traditionell vaxning.');
  const [service2Text, setService2Text] = useState(localStorage.getItem('service2Text') || 'För en mer långvarig lösning, prova vår laserbehandling. Den erbjuder en modern teknik för nästan smärtfri och varaktig hårborttagning.');
  const [infoText, setInfoText] = useState(localStorage.getItem('infoText') || 'Vi är stolta över att erbjuda högkvalitativa tjänster inom hårborttagning, som kombinerar modern teknik med professionell expertis. Vårt mål är att ge dig den bästa möjliga upplevelsen i en avslappnande och bekväm miljö.');

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const handleParagraphChange = (e) => {
    setParagraphText(e.target.value);
  };

  const handleService1Change = (e) => {
    setService1Text(e.target.value);
  };

  const handleService2Change = (e) => {
    setService2Text(e.target.value);
  };

  const handleInfoChange = (e) => {
    setInfoText(e.target.value);
  };

  const saveChanges = () => {
    localStorage.setItem('editableText', editableText);
    localStorage.setItem('paragraphText', paragraphText);
    localStorage.setItem('service1Text', service1Text);
    localStorage.setItem('service2Text', service2Text);
    localStorage.setItem('infoText', infoText);
    alert('Ändringar sparade!');
  };

  return (
    <div className="home">
      {isAuthenticated ? (
        <textarea className="editable-textarea" value={editableText} onChange={(e) => setEditableText(e.target.value)} />
      ) : (
        <h1>{editableText}</h1>
      )}

      {isAuthenticated ? (
        <textarea className="editable-textarea" value={paragraphText} onChange={handleParagraphChange} />
      ) : (
        <p>{paragraphText}</p>
      )}

      <div className="content">
        <div className="services">
        <a href="https://www.bokadirekt.se/places/anna-innovation-vaxning-malmo-52639" className="card-link">
          <div className="card service">
            <h2>Vaxning Brasiliansk - 550 kr</h2>
            {isAuthenticated ? (
              <textarea value={service1Text} onChange={handleService1Change} />
            ) : (
              <p>{service1Text}</p>
            )}
          </div>
          </a>

          <a href="https://www.bokadirekt.se/places/anna-innovation-vaxning-malmo-52639" className="card-link">
          <div className="card service">
            <h2>Laser Brasiliansk - 799 kr</h2>
            {isAuthenticated ? (
              <textarea value={service2Text} onChange={handleService2Change} />
            ) : (
              <p>{service2Text}</p>
            )}
          </div>
          </a>
        </div>
        <img src={vaxImage} alt="Vaxning" className="home-image" />
      </div>
      {isAuthenticated ? (
        <textarea value={infoText} onChange={handleInfoChange} />
      ) : (
        <p>{infoText}</p>
      )}
      {isAuthenticated && <button onClick={saveChanges}>Spara</button>}
      <a href="https://www.bokadirekt.se/places/anna-innovation-vaxning-malmo-52639" className="button">Boka tid</a>
      <h2>Vanliga frågor (FAQ)</h2>
      <div className="faq">
        <div className="faq-item" onClick={() => toggleQuestion(0)}>
          <h3>
            Hur länge håller resultaten av vaxning? 
            <span className="arrow">{openQuestion === 0 ? '▲' : '▼'}</span>
          </h3>
          {openQuestion === 0 && <p>Resultaten av vaxning kan vara i upp till fyra till sex veckor beroende på din hårväxtcykel.</p>}
        </div>
        <div className="faq-item" onClick={() => toggleQuestion(1)}>
          <h3>
            Är det värt att vaxa sig?
            <span className="arrow">{openQuestion === 1 ? '▲' : '▼'}</span>
          </h3>
          {openQuestion === 1 && (
            <p>
              Vid regelbunden vaxning hamnar man sedan mellan olika växtfaser och uppnår då ett hårfritt resultat. Så småningom växer det ut långsammare samt växer ut mycket glesare. Du slipper att känna stubb igen!
            </p>
          )}
        </div>
        <div className="faq-item" onClick={() => toggleQuestion(2)}>
          <h3>
            Vilka områden kan behandlas med laserhårborttagning?
            <span className="arrow">{openQuestion === 2 ? '▲' : '▼'}</span>
          </h3>
          {openQuestion === 2 && <p>De flesta områden på kroppen kan behandlas med laserhårborttagning, inklusive ansikte, ben, armar, armhålor och bikiniområdet.</p>}
        </div>
        <div className="faq-item" onClick={() => toggleQuestion(3)}>
          <h3>
            Vad ska jag göra före och efter en vaxning?
            <span className="arrow">{openQuestion === 3 ? '▲' : '▼'}</span>
          </h3>
          {openQuestion === 3 && (
            <p>
              Före en vaxning bör du undvika att använda lotion eller olja på området som ska vaxas. Det är också bra att peela huden ett par dagar innan för att undvika inåtväxta hårstrån.
              Efter vaxning, undvik solbad, heta duschar och täta kläder i 24 timmar för att undvika irritation. Applicera en lugnande lotion för att minska eventuell rodnad och håll huden återfuktad.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
