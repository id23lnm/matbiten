import React from 'react';
import videoPoster from '../assets/video-poster.png';
import videoSrc from '../assets/video.mp4';

const AboutUs = () => {
  return (
	
	<main className="about-us-section">
		<div className="about-us-text">
			<h2>Om oss</h2>
			<p>
				Vår restaurang har funnits i många år och ligger placerad på Umedalen i Umeå.
				På Matbiten serverar vi allt från nygräddade pizzor och saftiga grillrätter, 
				till krämiga pastarätter och fräscha sallader. Vi kombinerar klassiska smaker 
				med spännande nyheter för att kunna erbjuda något för alla. <br/> <br/> 

				Har du allergier? Tveka inte på att höra av dig så gör vi vårt bästa för att bemöta dina behov. 
			</p>
		</div>

		<div className="about-us-media">
			<video controls poster={videoPoster}>
				<source src={videoSrc} type="video/mp4" />
			</video>
			<p>Kom i rätt stämning! Tryck på play och njut av både bilder 
			och musik som fångar kärleken till god mat och gemenskap.</p>
		</div>
	</main>

  );
};

export default AboutUs;