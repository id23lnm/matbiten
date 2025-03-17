import React from 'react';
import mapImage from '../assets/map.png';
import foodoraImage from '../assets/foodora.png';

const FindUs = () => {
  return (
	<main className="find-us-section">
		<div class="find-us-map">
			<img src={mapImage} alt="Vår plats på kartan"/>
		</div>
		<div className="find-us-text">
			<h2>Adress:</h2>
			<p>Umedalsalén 25 <br/>
				90364 Umeå</p>
	
			<p className="foodora-info-text">Har du inte möjlighet att ta dig hit? Missa inte att vi finns på Foodora!</p>

			<div className="foodora-info">
				<img src={foodoraImage} alt="Foodora"/>
				<a href="https://www.foodora.se/en/restaurant/rbvu/matbitens-pizzeria" target="_blank">
					Klicka <span class="pink-text">HÄR</span> för att komma till Foodora</a>
			</div>
		</div>
	</main>
  );
};

export default FindUs;