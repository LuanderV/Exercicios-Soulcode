import React, { useState } from 'react';
import './ConversorTemperatura.css';

const ConversorTemperatura = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState(null);

    const handleInputChange = (e) => {
        setCelsius(e.target.value);
    };

    const converterParaFahrenheit = () => {
        const celsiusFloat = parseFloat(celsius);
        if (!isNaN(celsiusFloat)) {
            setFahrenheit((celsiusFloat * 1.8) + 32);
        } else {
            alert('Por favor, insira um valor numérico válido.');
        }
    };

    return (
        <div className="conversor-container">
            <h2>Conversor de Temperatura</h2>
            <input 
                type="text" 
                value={celsius} 
                onChange={handleInputChange} 
                placeholder="Digite a temperatura em Celsius" 
                className="conversor-input"
            />
            <button className="conversor-button" onClick={converterParaFahrenheit}>Converter</button>
            {fahrenheit !== null && (
                <p>{celsius}°C é igual a {fahrenheit}°F</p>
            )}
        </div>
    );
};

export default ConversorTemperatura;
