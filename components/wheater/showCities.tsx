// CityList.tsx

'use client'

import React, { useState, useEffect } from 'react';
import CityItem, { City } from './CityItem'; // Importar el componente CityItem
import AlertComponent from '../alerts/ConfirmAlert'; // Importar el componente de alerta

const fetchTemperature = async (cityName: string): Promise<string> => {
    try {
        const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error fetching temperature');
        }
        const data = await response.json();
        const temperature = data.main.temp;
        return temperature.toString();
    } catch (error) {
        console.error(error);
        return 'City not found';
    }
};

export default function CityList() {
    // Estado para la lista de ciudades
    const [cities, setCities] = useState<City[]>([]);
    const [cityToDelete, setCityToDelete] = useState<number | null>(null);

    // Recuperar las ciudades del localStorage al montar el componente
    useEffect(() => {
        const existingCities = localStorage.getItem('Cities');
        if (existingCities) {
            const parsedCities: City[] = JSON.parse(existingCities);

            // Obtener las temperaturas para cada ciudad
            Promise.all(parsedCities.map(async (city) => {
                const temperature = await fetchTemperature(city.nameCity);
                return { ...city, temperature };
            })).then((citiesWithTemp) => {
                setCities(citiesWithTemp);
            });
        }
    }, []);

    const handleDeleteClick = (index: number) => {
        setCityToDelete(index);
    };

    const handleConfirmDelete = () => {
        if (cityToDelete !== null) {
            const updatedCities = cities.filter((_, i) => i !== cityToDelete);
            setCities(updatedCities);
            localStorage.setItem('Cities', JSON.stringify(updatedCities));
            setCityToDelete(null);
        }
    };

    const handleCancelDelete = () => {
        setCityToDelete(null);
    };

    return (
        <div className="bg-white border-4 rounded-lg shadow relative m-10">
            <div className="p-6 space-y-6">
                <h3 className="text-xl font-semibold">Cities List</h3>
                <ul className='flex flex-col gap-7'>
                    {cities.length > 0 ? (
                        cities.map((city, index) => (
                            <CityItem 
                                key={index} 
                                city={city} 
                                index={index} 
                                onDelete={handleDeleteClick} // Pasar la función handleDeleteClick
                            />
                        ))
                    ) : (
                        <p>No cities to display.</p>
                    )}
                </ul>
            </div>

            {/* Mostrar el componente de alerta si hay una ciudad para eliminar */}
            {cityToDelete !== null && (
                <AlertComponent 
                    message="You won't be able to revert this!" 
                    onConfirm={handleConfirmDelete} 
                    onCancel={handleCancelDelete}
                />
            )}
        </div>
    );
}
