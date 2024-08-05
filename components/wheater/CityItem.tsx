
import React from 'react';

// Define la interfaz para las ciudades
export interface City {
    nameCity: string;
    country: string;
    reason: string;
    createdAt: string;
    temperature: string;
}

interface CityItemProps {
    city: City;
    index: number;
    onDelete: (index: number) => void;
}

const getColorByTemperature = (temperature: number): string => {
    if (temperature <= 0) {
        return '#00f'; // Azul para temperaturas bajo cero
    } else if (temperature > 0 && temperature <= 15) {
        return '#0cf'; // Cian para temperaturas frías
    } else if (temperature > 15 && temperature <= 25) {
        return '#ff0'; // Amarillo para temperaturas moderadas
    } else if (temperature > 25 && temperature <= 35) {
        return '#f90'; // Naranja para temperaturas cálidas
    } else {
        return '#f00'; // Rojo para temperaturas altas
    }
};

const getTextColorByTemperature = (temperature: number): string => {
    if (temperature <= 0) {
        return '#fff'; // Blanco para temperaturas bajo cero (más visible sobre el fondo azul)
    } else if (temperature > 0 && temperature <= 15) {
        return '#000'; // Negro para temperaturas frías (más visible sobre el fondo cian)
    } else if (temperature > 15 && temperature <= 25) {
        return '#000'; // Negro para temperaturas moderadas (más visible sobre el fondo amarillo)
    } else if (temperature > 25 && temperature <= 35) {
        return '#fff'; // Blanco para temperaturas cálidas (más visible sobre el fondo naranja)
    } else {
        return '#fff'; // Blanco para temperaturas altas (más visible sobre el fondo rojo)
    }
};

const CityItem: React.FC<CityItemProps> = ({ city, index, onDelete }) => {
    // Convertir la temperatura de string a number
    const temp = parseFloat(city.temperature);
    // Obtener el color basado en la temperatura
    const backgroundColor = getColorByTemperature(temp);
    const textColor = getTextColorByTemperature(temp);

    return (
        <li 
            className="p-2 border-b rounded-lg"
            style={{ backgroundColor, color: textColor }} // Aplicar el color de fondo y del texto
        >
            <strong>{city.nameCity}</strong> - {city.country} <br />
            <small>{city.reason}</small> <br />
            <small>Created at: {city.createdAt}</small> <br />
            <small>Temperature: {city.temperature} °C</small>
            <div>
                <button 
                    className='p-1 bg-red-500 text-white rounded-xl mt-2'
                    onClick={() => onDelete(index)} // Asignar la función onDelete
                >
                    Delete
                </button>
            </div>
        </li>
    );
};

export default CityItem;
