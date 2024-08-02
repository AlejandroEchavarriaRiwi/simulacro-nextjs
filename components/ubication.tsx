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