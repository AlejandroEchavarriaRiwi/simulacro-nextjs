'use client'

import { useEffect, useState } from 'react';
import { fetchWeatherData } from '../utils/wheater'; // Corrige el nombre del archivo si es necesario

interface WeatherData {
    weather: { description: string }[];
    main: { temp: number };
    name: string;
}

function getCurrentLocation(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error('Geolocalización no es soportada por este navegador.'));
        } else {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        }
    });
}

async function getCityName(lat: number, lon: number): Promise<string> {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
    const data = await response.json();
    return data.address.city || data.address.town || data.address.village || 'Ciudad desconocida';
}

export default function WeatherPage() {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchWeather() {
            try {
                let cityName = localStorage.getItem('citySearch');

                if (!cityName) {
                    console.log('No city in localStorage, getting current location...');
                    const position = await getCurrentLocation();
                    console.log('Got position:', position.coords.latitude, position.coords.longitude);
                    cityName = await getCityName(position.coords.latitude, position.coords.longitude);
                    console.log('Got city name:', cityName);
                } else {
                    console.log('Using city from localStorage:', cityName);
                }

                console.log('Fetching weather for:', cityName);
                const weatherData = await fetchWeatherData(cityName);
                console.log('Weather data:', weatherData);
                setWeather(weatherData);
            } catch (err) {
                console.error('Error:', err);
                setError('No se pudo obtener el clima: ' + (err as Error).message);
            }
        }

        fetchWeather();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!weather) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Weather in {weather.name}</h1>
            <p>{weather.weather[0]?.description || 'No description available'}</p>
            <p>Temperature: {weather.main?.temp || 'N/A'}K</p>
        </div>
    );
}