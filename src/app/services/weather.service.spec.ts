import { TestBed, inject } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as MockData from './Weather-MockData.json';

describe('WeatherService', () => {
  let service: WeatherService
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService]
    });

    service = TestBed.get(WeatherService);
    httpMock = TestBed.get(HttpTestingController);
    // httpClientSpy = jasmine.createSpyObj('httpclient', ['get']);
  });

  afterEach(() => {
    httpMock.verify()
  })
/*
  it('should be created', () => {
    expect(service).toBeTruthy();
  })

  it('should return moods and activities, #getSavedData', () => {
    let response;
    service.getSavedData().subscribe((values) => {
      response = values;
      expect(response).toEqual(data);
      expect(response.length).toEqual(2);  
    })

    const request = httpMock.expectOne(`${service.ServerUrl}/getData`)
    expect(request.request.method).toEqual('GET');
    expect(request.request.responseType).toEqual('json');
    expect(request.request.url).toEqual('http://localhost:3100/getData');
    request.flush(data);
  })

  it('should return weather forecast, #getWeatherForecast()', () => {
    service.getWeatherForecast(34.11, 35.11).subscribe((forecastData) => {
      expect(forecastData.length).toBe(3);
      expect(forecastData).toEqual(forecastWeather);
    })

    const request = httpMock.expectOne(`${service.WEATHERURL}/forecast?lat=35.11&lon=34.11&APPID=${service.apiKey}`);
    expect(request.request.method).toBe('GET');
    expect(request.request.responseType).toBe('json');
    // expect(request.request.url).toEqual('');
    request.flush(forecastWeather);
  })

  it('should return current weather, #getCurrentByLocation()', () => {
    service.getCurrentByLocation(34.11, 35.11).subscribe((currentData) => {
      expect(currentData).toEqual(currentWeather);
    })

    const request = httpMock.expectOne(`${service.WEATHERURL}/weather?lat=35.11&lon=34.11&APPID=${service.apiKey}`);
    expect(request.request.method).toBe('GET');
    expect(request.request.responseType).toBe('json');
    // expect(request.request.url).toEqual('');
    request.flush(currentWeather);
  })*/

  const data = MockData[2];
  const forecastWeather = MockData[1];
  const currentWeather = MockData[0];
});
