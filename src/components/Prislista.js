import React, { useState } from 'react';
import './style/Prislista.css';

function Prislista({ isAuthenticated }) {
  const [prices, setPrices] = useState({
    laserArmhalor: localStorage.getItem('laserArmhalor') || '30 minuter, 399 kr',
    laserBrasiliansk: localStorage.getItem('laserBrasiliansk') || '60 minuter, 799 kr',
    laserBrasilianskArmhalor: localStorage.getItem('laserBrasilianskArmhalor') || '60 minuter, 1 200 kr',
    laserBrasilianskArmhalorBackThigh: localStorage.getItem('laserBrasilianskArmhalorBackThigh') || '60 minuter, 1 500 kr',
    laserBrasilianskFull: localStorage.getItem('laserBrasilianskFull') || '90 minuter, 3 400 kr',
    laserBrasilianskBackThigh: localStorage.getItem('laserBrasilianskBackThigh') || '60 minuter, 1 200 kr',
    laserHalfArms: localStorage.getItem('laserHalfArms') || '30 minuter, 400 kr',
    laserHalfLegs: localStorage.getItem('laserHalfLegs') || '30 minuter, 800 kr',
    laserButtocks: localStorage.getItem('laserButtocks') || '30 minuter, 500 kr',
    laserBack: localStorage.getItem('laserBack') || '30 minuter, 1 000 kr',
    laserFullArms: localStorage.getItem('laserFullArms') || '50 minuter, 800 kr',
    laserFullLegs: localStorage.getItem('laserFullLegs') || '60 minuter, 1 600 kr',
    waxingFullButtocks: localStorage.getItem('waxingFullButtocks') || '20 minuter, 299 kr',
    waxingBrazilian: localStorage.getItem('waxingBrazilian') || '60 minuter, 550 kr',
    waxingBrazilianArmhalor: localStorage.getItem('waxingBrazilianArmhalor') || '60 minuter, 650 kr',
    waxingBrazilianBackThigh: localStorage.getItem('waxingBrazilianBackThigh') || '60 minuter, 750 kr',
    waxingBrazilianHalfLegs: localStorage.getItem('waxingBrazilianHalfLegs') || '60 minuter, 899 kr',
    waxingBrazilianFullLegs: localStorage.getItem('waxingBrazilianFullLegs') || '90 minuter, 1 199 kr',
    waxingBrazilianFull: localStorage.getItem('waxingBrazilianFull') || '130 minuter, 1 499 kr',
    waxingBrazilianFullBack: localStorage.getItem('waxingBrazilianFullBack') || '150 minuter, 2 000 kr',
    waxingBrazilianFullButtocks: localStorage.getItem('waxingBrazilianFullButtocks') || '130 minuter, 1 650 kr',
    waxingBrazilianBackButtocks: localStorage.getItem('waxingBrazilianBackButtocks') || '130 minuter, 1 400 kr',
    waxingBrazilianThighButtocks: localStorage.getItem('waxingBrazilianThighButtocks') || '60 minuter, 699 kr',
    waxingBrazilianThighFullButtocks: localStorage.getItem('waxingBrazilianThighFullButtocks') || '60 minuter, 950 kr',
    waxingBrazilianHalfLegsOnly: localStorage.getItem('waxingBrazilianHalfLegsOnly') || '60 minuter, 850 kr',
    waxingBrazilianFullLegsOnly: localStorage.getItem('waxingBrazilianFullLegsOnly') || '120 minuter, 1 150 kr',
    waxingBrazilianLegsButtocks: localStorage.getItem('waxingBrazilianLegsButtocks') || '120 minuter, 1 399 kr',
    waxingArmhalor: localStorage.getItem('waxingArmhalor') || '30 minuter, 199 kr',
    waxingBikiniLine: localStorage.getItem('waxingBikiniLine') || '30 minuter, 350 kr',
    waxingBikiniLineArmhalor: localStorage.getItem('waxingBikiniLineArmhalor') || '30 minuter, 499 kr',
    waxingHalfArms: localStorage.getItem('waxingHalfArms') || '20 minuter, 199 kr',
    waxingHalfLegs: localStorage.getItem('waxingHalfLegs') || '40 minuter, 350 kr',
    waxingHalfLegsBikiniLine: localStorage.getItem('waxingHalfLegsBikiniLine') || '60 minuter, 699 kr',
    waxingFullArms: localStorage.getItem('waxingFullArms') || '30 minuter, 300 kr',
    waxingFullLegs: localStorage.getItem('waxingFullLegs') || '60 minuter, 650 kr',
    waxingFullBack: localStorage.getItem('waxingFullBack') || '30 minuter, 399 kr',
    waxingBackThigh: localStorage.getItem('waxingBackThigh') || '30 minuter, 199 kr',
    waxingUpperLipChin: localStorage.getItem('waxingUpperLipChin') || '20 minuter, 299 kr',
    waxingUpperLipChinSideburns: localStorage.getItem('waxingUpperLipChinSideburns') || '30 minuter, 399 kr',
    waxingUpperLipOrChin: localStorage.getItem('waxingUpperLipOrChin') || '20 minuter, 199 kr',
    waxingBikiniLineFullLegs: localStorage.getItem('waxingBikiniLineFullLegs') || '80 minuter, 1 150 kr',
  });

  const handlePriceChange = (key, value) => {
    setPrices(prevPrices => ({
      ...prevPrices,
      [key]: value
    }));
  };

  const savePrices = () => {
    Object.keys(prices).forEach(key => {
      localStorage.setItem(key, prices[key]);
    });
    alert('Priser sparade!');
  };

  return (
    <div className="prislista">
      <h1>Prislista</h1>
      <a href="https://www.bokadirekt.se/places/anna-innovation-vaxning-malmo-52639" className="button">Boka tid</a>
      <div className="pricing">
        <h2 className="category-title">Laser Behandling</h2>
        <div className="price-item">
          <h3>Laser – armhålor</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.laserArmhalor} 
              onChange={(e) => handlePriceChange('laserArmhalor', e.target.value)} 
            />
          ) : (
            <p>{prices.laserArmhalor}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Laser – brasiliansk</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.laserBrasiliansk} 
              onChange={(e) => handlePriceChange('laserBrasiliansk', e.target.value)} 
            />
          ) : (
            <p>{prices.laserBrasiliansk}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Laser – brasiliansk + armhålor</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.laserBrasilianskArmhalor} 
              onChange={(e) => handlePriceChange('laserBrasilianskArmhalor', e.target.value)} 
            />
          ) : (
            <p>{prices.laserBrasilianskArmhalor}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Laser – brasiliansk + armhålor + baksidan lår</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.laserBrasilianskArmhalorBackThigh} 
              onChange={(e) => handlePriceChange('laserBrasilianskArmhalorBackThigh', e.target.value)} 
            />
          ) : (
            <p>{prices.laserBrasilianskArmhalorBackThigh}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Laser – brasiliansk + armhålor + rumpa + hela ben</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.laserBrasilianskFull} 
              onChange={(e) => handlePriceChange('laserBrasilianskFull', e.target.value)} 
            />
          ) : (
            <p>{prices.laserBrasilianskFull}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Laser – brasiliansk + baksida lår</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.laserBrasilianskBackThigh} 
              onChange={(e) => handlePriceChange('laserBrasilianskBackThigh', e.target.value)} 
            />
          ) : (
            <p>{prices.laserBrasilianskBackThigh}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Laser – halva armar</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.laserHalfArms} 
              onChange={(e) => handlePriceChange('laserHalfArms', e.target.value)} 
            />
          ) : (
            <p>{prices.laserHalfArms}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Laser – halva ben</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.laserHalfLegs} 
              onChange={(e) => handlePriceChange('laserHalfLegs', e.target.value)} 
            />
          ) : (
            <p>{prices.laserHalfLegs}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Laser – rumpa (kvinna)</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.laserButtocks} 
              onChange={(e) => handlePriceChange('laserButtocks', e.target.value)} 
            />
          ) : (
            <p>{prices.laserButtocks}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Laser – rygg (kvinna)</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.laserBack} 
              onChange={(e) => handlePriceChange('laserBack', e.target.value)} 
            />
          ) : (
            <p>{prices.laserBack}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Laser – hela armar</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.laserFullArms} 
              onChange={(e) => handlePriceChange('laserFullArms', e.target.value)} 
            />
          ) : (
            <p>{prices.laserFullArms}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Laser – hela ben</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.laserFullLegs} 
              onChange={(e) => handlePriceChange('laserFullLegs', e.target.value)} 
            />
          ) : (
            <p>{prices.laserFullLegs}</p>
          )}
        </div>
        
        <h2 className="category-title">Vaxning</h2>
        <div className="price-item">
          <h3>Brasiliansk vaxning (rumpa ingår)</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.waxingBrazilian} 
              onChange={(e) => handlePriceChange('waxingBrazilian', e.target.value)} 
            />
          ) : (
            <p>{prices.waxingBrazilian}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Brasiliansk vaxning + armhålor</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.waxingBrazilianArmhalor} 
              onChange={(e) => handlePriceChange('waxingBrazilianArmhalor', e.target.value)} 
            />
          ) : (
            <p>{prices.waxingBrazilianArmhalor}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Brasiliansk vaxning + baksida lår</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.waxingBrazilianBackThigh} 
              onChange={(e) => handlePriceChange('waxingBrazilianBackThigh', e.target.value)} 
            />
          ) : (
            <p>{prices.waxingBrazilianBackThigh}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Brasiliansk vaxning + armhålor + halva ben</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.waxingBrazilianHalfLegs} 
              onChange={(e) => handlePriceChange('waxingBrazilianHalfLegs', e.target.value)} 
            />
          ) : (
            <p>{prices.waxingBrazilianHalfLegs}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Brasiliansk vaxning + armhålor + hela ben</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.waxingBrazilianFullLegs} 
              onChange={(e) => handlePriceChange('waxingBrazilianFullLegs', e.target.value)} 
            />
          ) : (
            <p>{prices.waxingBrazilianFullLegs}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Brasiliansk vaxning + armhålor + hela ben + armar</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.waxingBrazilianFull} 
              onChange={(e) => handlePriceChange('waxingBrazilianFull', e.target.value)} 
            />
          ) : (
            <p>{prices.waxingBrazilianFull}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Brasiliansk vaxning + armhålor + hela ben + armar + hela rumpa + hela ryggen + maglinjen</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.waxingBrazilianFullBack} 
              onChange={(e) => handlePriceChange('waxingBrazilianFullBack', e.target.value)} 
            />
          ) : (
            <p>{prices.waxingBrazilianFullBack}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Brasiliansk vaxning + armhålor + hela ben + armar + hela rumpa</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.waxingBrazilianFullButtocks} 
              onChange={(e) => handlePriceChange('waxingBrazilianFullButtocks', e.target.value)} 
            />
          ) : (
            <p>{prices.waxingBrazilianFullButtocks}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Brasiliansk vaxning + armhålor + hela ben + hela rumpa</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.waxingBrazilianBackButtocks} 
              onChange={(e) => handlePriceChange('waxingBrazilianBackButtocks', e.target.value)} 
            />
          ) : (
            <p>{prices.waxingBrazilianBackButtocks}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Brasiliansk vaxning + baksida lår</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.waxingBrazilianThighButtocks} 
              onChange={(e) => handlePriceChange('waxingBrazilianThighButtocks', e.target.value)} 
            />
          ) : (
            <p>{prices.waxingBrazilianThighButtocks}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Brasiliansk vaxning + baksida lår + hela rumpa</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.waxingBrazilianThighFullButtocks} 
              onChange={(e) => handlePriceChange('waxingBrazilianThighFullButtocks', e.target.value)} 
            />
          ) : (
            <p>{prices.waxingBrazilianThighFullButtocks}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Brasiliansk vaxning + halva ben</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.waxingBrazilianHalfLegsOnly} 
              onChange={(e) => handlePriceChange('waxingBrazilianHalfLegsOnly', e.target.value)} 
            />
          ) : (
            <p>{prices.waxingBrazilianHalfLegsOnly}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Brasiliansk vaxning + hela ben</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.waxingBrazilianFullLegsOnly} 
              onChange={(e) => handlePriceChange('waxingBrazilianFullLegsOnly', e.target.value)} 
            />
          ) : (
            <p>{prices.waxingBrazilianFullLegsOnly}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Brasiliansk vaxning + hela ben + hela rumpa</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.waxingBrazilianLegsButtocks} 
              onChange={(e) => handlePriceChange('waxingBrazilianLegsButtocks', e.target.value)} 
            />
          ) : (
            <p>{prices.waxingBrazilianLegsButtocks}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Vaxning – armhålor</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.waxingArmhalor} 
              onChange={(e) => handlePriceChange('waxingArmhalor', e.target.value)} 
            />
          ) : (
            <p>{prices.waxingArmhalor}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Vaxning – bikinilinje</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.waxingBikiniLine} 
              onChange={(e) => handlePriceChange('waxingBikiniLine', e.target.value)} 
            />
          ) : (
            <p>{prices.waxingBikiniLine}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Vaxning – bikinilinje + armhålor</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.waxingBikiniLineArmhalor} 
              onChange={(e) => handlePriceChange('waxingBikiniLineArmhalor', e.target.value)} 
            />
          ) : (
            <p>{prices.waxingBikiniLineArmhalor}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Vaxning – halva armar</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.waxingHalfArms} 
              onChange={(e) => handlePriceChange('waxingHalfArms', e.target.value)} 
            />
          ) : (
            <p>{prices.waxingHalfArms}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Vaxning – halva ben</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.waxingHalfLegs} 
              onChange={(e) => handlePriceChange('waxingHalfLegs', e.target.value)} 
            />
          ) : (
            <p>{prices.waxingHalfLegs}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Vaxning – halva ben + bikinilinje</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.waxingHalfLegsBikiniLine} 
              onChange={(e) => handlePriceChange('waxingHalfLegsBikiniLine', e.target.value)} 
            />
          ) : (
            <p>{prices.waxingHalfLegsBikiniLine}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Vaxning – hela armar</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.waxingFullArms} 
              onChange={(e) => handlePriceChange('waxingFullArms', e.target.value)} 
            />
          ) : (
            <p>{prices.waxingFullArms}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Vaxning – hela ben</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.waxingFullLegs} 
              onChange={(e) => handlePriceChange('waxingFullLegs', e.target.value)} 
            />
          ) : (
            <p>{prices.waxingFullLegs}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Vaxning – hela rygg (kvinna)</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.waxingFullBack} 
              onChange={(e) => handlePriceChange('waxingFullBack', e.target.value)} 
            />
          ) : (
            <p>{prices.waxingFullBack}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Vaxning – låren baksida</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.waxingBackThigh} 
              onChange={(e) => handlePriceChange('waxingBackThigh', e.target.value)} 
            />
          ) : (
            <p>{prices.waxingBackThigh}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Vaxning – överläpp + haka</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.waxingUpperLipChin} 
              onChange={(e) => handlePriceChange('waxingUpperLipChin', e.target.value)} 
            />
          ) : (
            <p>{prices.waxingUpperLipChin}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Vaxning – överläpp + haka + polisonger</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.waxingUpperLipChinSideburns} 
              onChange={(e) => handlePriceChange('waxingUpperLipChinSideburns', e.target.value)} 
            />
          ) : (
            <p>{prices.waxingUpperLipChinSideburns}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Vaxning – överläpp eller haka</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.waxingUpperLipOrChin} 
              onChange={(e) => handlePriceChange('waxingUpperLipOrChin', e.target.value)} 
            />
          ) : (
            <p>{prices.waxingUpperLipOrChin}</p>
          )}
        </div>
        <div className="price-item">
          <h3>Vaxning – bikinilinje + armhålor + hela ben</h3>
          {isAuthenticated ? (
            <input 
              type="text" 
              value={prices.waxingBikiniLineFullLegs} 
              onChange={(e) => handlePriceChange('waxingBikiniLineFullLegs', e.target.value)} 
            />
          ) : (
            <p>{prices.waxingBikiniLineFullLegs}</p>
          )}
        </div>
      </div>
      {isAuthenticated && <button onClick={savePrices}>Spara</button>}
    </div>
  );
}

export default Prislista;
