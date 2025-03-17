import React from 'react';

const ContactUs = () => {
  return (
	<main className="contact-us-section">
	<div className="contact-form">
		<form id="form" name="form" method="post">

			Förnamn:<br/>
			<input type="text" name="fnamn" id="fnamn" /> <br/>
			
			Efternamn:<br/>
			<input type="text" name="enamn" id="enamn" /> <br/>
			
			E-postadress:<br/>
			<input type="text" name="epost" id="epost" /> <br/>
			
			Meddelande:<br/>
			<textarea name="meddelande" id="meddelande" cols="45" rows="5"></textarea> <br/>
			
			<input type="submit" name="skicka" id="skicka" value="Skicka meddelandet"/>
			
		</form>
	</div>

	<div className="contact-info">
		<div className="contact-us-text">
			<h2>KONTAKT:</h2>
			<p>Har du frågor eller önskar hjälp med något? Vi finns här för dig. <br/> <br/>
				Telefon: 090-31600</p>	
		</div>

		<div class="open-hours-text">
			<h2>ÖPPETTIDER:</h2>
			<p>Måndag - Fredag: 09:00 - 21:00 <br/>
				Lördag: 10:00 - 21:00 <br/>
				Söndag: 10:00 - 21:00</p>
		</div>
	</div>
</main>
  );
};

export default ContactUs;