
import { WeatherData } from "../../models/wheater.models"

export async function fetchWeatherData(cityName: string): Promise<WeatherData> {
    const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
    if (!API_KEY) {
        throw new Error('API key not found');
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
        const errorText = await response.text(); // Obtener más detalles sobre el error
        throw new Error(`HTTP error! status: ${response.status}, details: ${errorText}`);
    }

    const data = await response.json();
    return data;
}
