import { useEffect, useState } from 'react';
import type { OpenMeteoResponse } from '../types/DashboardTypes';

interface DataFetcherOutput {
    data: OpenMeteoResponse | null;
    loading: boolean;
    error: string | null;
}

export default function DataFetcher( city: String ) : DataFetcherOutput {

    const [data, setData] = useState<OpenMeteoResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const cities = [
            {
            city: "guayaquil",
            latitude: -2.1962,
            longitude: -79.8862
            }, 
            {
            city: "quito",
            latitude: -0.2298,
            longitude: -78.525
            },
            {
            city: "manta",
            latitude: -0.9494,
            longitude: -80.7314
            },
            {
            city: "cuenca",
            latitude: -2.9005,
            longitude: -79.0045
            }
        ];

        // Reemplace con su URL de la API de Open-Meteo obtenida en actividades previas
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${cities.find((c) => c.city == city)?.latitude}&longitude=${cities.find((c) => c.city == city)?.longitude}&hourly=temperature_2m,wind_speed_10m&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m&timezone=America%2FChicago`

        const fetchData = async () => {

            try {

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
                }

                const result: OpenMeteoResponse = await response.json();
                setData(result);

            } catch (err: any) {

                if (err instanceof Error) {
                    if (city !== "") {
                        setError(err.message);
                    }
                } else {
                    setError("Ocurrió un error desconocido al obtener los datos.");
                }

            } finally {
                if (city !== "") {
                    setLoading(false);
                }
            }
        };

        fetchData();

    }, [city]); // El array vacío asegura que el efecto se ejecute solo una vez después del primer renderizado

    return { data, loading, error };

}