import React from 'react';
import MenuNav from '../components/MenuNav';
import PizzaRecommendation from '../components/PizzaRecommendation';

const Menu = () => {

	const pizza = [
        "Margarita", "Capricciosa","Vesuvio", "Hawaii"
    ];

	return(
		<>
		<MenuNav/>
		<main className="menu-container">

        <PizzaRecommendation pizzas={pizza} />
		
        <section id="klassiska-pizzor" class="menu-section">
            <h2>KLASSISKA PIZZOR</h2>
			<ul>
				<li><strong>1. LOREM IPSUM</strong> (Dolor) ...................................................................99:-</li>
                <li><strong>2. LOREM IPSUM</strong> (Dolor) ...................................................................99:-</li>
				<li><strong>3. LOREM IPSUM</strong> (Dolor) ...................................................................99:-</li>
				<li><strong>4. LOREM IPSUM</strong> (Dolor) ...................................................................99:-</li>
				<li><strong>5. LOREM IPSUM</strong> (Dolor) ...................................................................99:-</li>
				<li><strong>6. LOREM IPSUM</strong> (Dolor) ...................................................................99:-</li>
				<li><strong>7. LOREM IPSUM</strong> (Dolor) ...................................................................99:-</li>
				<li><strong>8. LOREM IPSUM</strong> (Dolor) ...................................................................99:-</li>
				<li><strong>9. LOREM IPSUM</strong> (Dolor) ...................................................................99:-</li>
            </ul>
        </section>

        <section id="rullpizzor" class="menu-section">
            <h2>RULLPIZZOR</h2>
            <ul>
                <li><strong>10. LOREM IPSUM</strong> (Dolor) .................................................................99:-</li>
				<li><strong>11. LOREM IPSUM</strong> (Dolor) .................................................................99:-</li>
				<li><strong>12. LOREM IPSUM</strong> (Dolor) .................................................................99:-</li>
				<li><strong>13. LOREM IPSUM</strong> (Dolor) .................................................................99:-</li>
				<li><strong>14. LOREM IPSUM</strong> (Dolor) .................................................................99:-</li>
				<li><strong>15. LOREM IPSUM</strong> (Dolor) .................................................................99:-</li>
				<li><strong>16. LOREM IPSUM</strong> (Dolor) .................................................................99:-</li>
            </ul>
        </section>

        <section id="inbakade-pizzor" class="menu-section">
            <h2>INBAKADE PIZZOR</h2>
            <ul>
				<li><strong>17. LOREM IPSUM</strong> (Dolor) .................................................................99:-</li>
                <li><strong>18. LOREM IPSUM</strong> (Dolor) .................................................................99:-</li>
				<li><strong>19. LOREM IPSUM</strong> (Dolor) .................................................................99:-</li>
				<li><strong>20. LOREM IPSUM</strong> (Dolor) .................................................................99:-</li>

            </ul>
        </section>

		<section id="halvinbakade-pizzor" class="menu-section">
            <h2>HALVINBAKADE PIZZOR</h2>
            <ul>
				<li><strong>21. LOREM IPSUM</strong> (Dolor) .................................................................99:-</li>
				<li><strong>22. LOREM IPSUM</strong> (Dolor) .................................................................99:-</li>
				<li><strong>23. LOREM IPSUM</strong> (Dolor) .................................................................99:-</li>
				<li><strong>24. LOREM IPSUM</strong> (Dolor) .................................................................99:-</li>
            </ul>
        </section>

		<section id="grillrätter/stripsmeny" class="menu-section">
            <h2>GRILLRÄTTER / STRIPSMENY</h2>
            <ul>
				<li><strong>25. LOREM IPSUM</strong> (Dolor) .................................................................99:-</li>
				<li><strong>26. LOREM IPSUM</strong> (Dolor) .................................................................99:-</li>
				<li><strong>27. LOREM IPSUM</strong> (Dolor) .................................................................99:-</li>
				<li><strong>28. LOREM IPSUM</strong> (Dolor) .................................................................99:-</li>
            </ul>
        </section>

		<section id="pastarätter" class="menu-section">
            <h2>PASTARÄTTER</h2>
            <ul>
				<li><strong>29. LOREM IPSUM</strong> (Dolor) .................................................................99:-</li>
				<li><strong>30. LOREM IPSUM</strong> (Dolor) .................................................................99:-</li>
				<li><strong>31. LOREM IPSUM</strong> (Dolor) .................................................................99:-</li>
				<li><strong>32. LOREM IPSUM</strong> (Dolor) .................................................................99:-</li>
            </ul>
        </section>

		<section id="sallader" class="menu-section">
            <h2>SALLADER</h2>
            <ul>
				<li><strong>33. LOREM IPSUM</strong> (Dolor) .................................................................99:-</li>
				<li><strong>34. LOREM IPSUM</strong> (Dolor) .................................................................99:-</li>
				<li><strong>35. LOREM IPSUM</strong> (Dolor) .................................................................99:-</li>
				<li><strong>36. LOREM IPSUM</strong> (Dolor) .................................................................99:-</li>
            </ul>
        </section>

		<section id="barnmeny" class="menu-section">
            <h2>BARNMENY</h2>
            <ul>
				<li><strong>37. LOREM IPSUM</strong> (Dolor) .................................................................99:-</li>
				<li><strong>38. LOREM IPSUM</strong> (Dolor) .................................................................99:-</li>
				<li><strong>39. LOREM IPSUM</strong> (Dolor) .................................................................99:-</li>
				<li><strong>40. LOREM IPSUM</strong> (Dolor) .................................................................99:-</li>
            </ul>
        </section>
		<section id="dagens-lunch" class="menu-section">
            <h2>DAGENS LUNCH</h2>
        
				<table>
					<tr>
						<th>Välj mellan:</th>
						<th>Pris:</th>
						<th>Detta ingår:</th>
					</tr>
					<tr>
						<td>Klassisk pizza: 1-5</td>
						<td>99:-</td>
						<td>Dryck, sallad, bröd</td>
					</tr>
					<tr>
						<td>Pastarätter: 29-31</td>
						<td>109:-</td>
						<td>Dryck, sallad, bröd</td>
					</tr>
					<tr>
						<td>Sallader: 33-36</td>
						<td>99:-</td>
						<td>Dryck, sallad, bröd, sås</td>
					</tr>
				</table>
        </section>
    </main>
	</>
	);
};

export default Menu;
