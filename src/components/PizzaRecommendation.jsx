import React, { useState } from 'react';

const PizzaRecommendation = ({ pizzas }) => {
    const [selectedPizza, setSelectedPizza] = useState(null);

    const recommendPizza = () => {
        const randomIndex = Math.floor(Math.random() * pizzas.length);
        setSelectedPizza(pizzas[randomIndex]);
    };

    return (
        <div className="pizza-recommendation">
            <button className="recommended-buttom" onClick={recommendPizza}>Svårt att välja? 
				Låt oss rekommendera en pizza!</button>
            {selectedPizza && (
                <p className="recommended-text">Vi rekommenderar: <strong>{selectedPizza}</strong></p>
            )}
        </div>
    );
};

export default PizzaRecommendation;

