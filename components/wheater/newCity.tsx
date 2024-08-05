'use client'

import React, { useState } from 'react';
import InputAlert from '../alerts/successAlert';

export default function NewCity() {
    // Estado para los campos del formulario
    const [nameCity, setNameCity] = useState('');
    const [country, setCountry] = useState('');
    const [reason, setReason] = useState('');

    // Maneja el envío del formulario
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Crear el objeto de la ciudad
        const newCity = {
            nameCity,
            country,
            reason,
            createdAt: new Date().toISOString(),
        };

        // Recuperar el array de ciudades existente del localStorage
        const existingCities = localStorage.getItem('Cities');
        let citiesArray = existingCities ? JSON.parse(existingCities) : [];

        // Agregar la nueva ciudad al array
        citiesArray.push(newCity);

        // Convertir el array a una cadena JSON y guardarlo en localStorage
        const citiesArrayString = JSON.stringify(citiesArray);
        localStorage.setItem('Cities', citiesArrayString);

        // Limpiar el formulario
        setNameCity('');
        setCountry('');
        setReason('');

        // Opcional: Mensaje de confirmación o redirección
        InputAlert('Creation successfully', 'success')
    };
    return (
        <div className="bg-white border-4 rounded-lg shadow relative m-10">
            <div className="flex items-start justify-between p-5 border-b rounded-t">
                <h3 className="text-xl font-semibold">
                    New city
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="product-modal">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </button>
            </div>

            <div className="p-6 space-y-6">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="nameCity" className="text-sm font-medium text-gray-900 block mb-2">Name City</label>
                            <input
                                type="text"
                                id="nameCity"
                                value={nameCity}
                                onChange={(e) => setNameCity(e.target.value)}
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                placeholder="Medellin"
                                required
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="country" className="text-sm font-medium text-gray-900 block mb-2">Country</label>
                            <input
                                type="text"
                                id="country"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                placeholder="Colombia"
                                required
                            />
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="reason" className="text-sm font-medium text-gray-900 block mb-2">Reason to analyze the weather</label>
                            <textarea
                                id="reason"
                                rows={6}
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                                placeholder="Details"
                            ></textarea>
                        </div>
                    </div>

                    <div className="p-6 border-t border-gray-200 rounded-b">
                        <button
                            type="submit"
                            className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
