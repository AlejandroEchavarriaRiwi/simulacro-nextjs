export interface BodyRequestCreateUser {
    username: string,
    password: string
}

export interface RequestLoginUser {
    username: string,
    password: string
}
export interface ResponseCreateUser {
    token: string,
    message: string,
}

export interface ResponseLoginUser {
    token: string,
    message: string,
}

export interface WeatherData {
    weather: Array<{
        description: string;
        main: string;
        icon: string;
    }>;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    name: string;
    sys: {
        country: string;
    };
}