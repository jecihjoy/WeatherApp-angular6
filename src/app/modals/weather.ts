export interface WeatherI {
    coord: Coordinate;
    weather: weather;
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Cloud;
    dt: any;
    sys: Sys;
    id: any;
    name: any;
    cod: any;
}

export interface Coordinate {
    lon: any;
    lat: any;
}

export interface weather {
    id: any;
    main: string;
    description: string;
    icon: any;
}
export interface Main {
    temp: any;
    pressure: any;
    humidity: any;
    temp_min: any;
    temp_max: any;
}
export interface Wind {
    speed: any;
    deg: any;
}
export interface Cloud {
    all: any
}
export interface Sys {
    type: number;
    id: number;
    message: any;
    country: string;
    sunrise: number;
    sunset: number;
}