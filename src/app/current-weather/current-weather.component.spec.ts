import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { MaterialModule } from '../material.module';
import { CurrentWeatherComponent } from './current-weather.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LocationService } from '../services/location.service';
import { WeatherService } from '../services/weather.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Routes, Router } from '@angular/router';
import * as MockData from '../services/Weather-MockData.json';
import { Subscription, of } from 'rxjs';
import { MoodWeatherComponent } from '../mood-weather/mood-weather.component';
import { WeatherForecastComponent } from '../weather-forecast/weather-forecast.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CurrentWeatherComponent', () => {
  let myComponent: CurrentWeatherComponent;
  let fixture: ComponentFixture<CurrentWeatherComponent>;
  let service: WeatherService;
  let subscription = new Subscription();
  let router;
  let locService: LocationService;

  const routes: Routes = [
    { path: 'weather/:city', component: CurrentWeatherComponent }
  ]

  class MockParams {
    params: any;
    constructor(params) {
      this.params = params;
    }

    get(key) {
      return this.params[key];
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, NgxPaginationModule, MaterialModule, HttpClientTestingModule, RouterTestingModule.withRoutes(routes)],
      declarations: [CurrentWeatherComponent, MoodWeatherComponent, WeatherForecastComponent],
      providers: [LocationService, WeatherService, FormBuilder, CurrentWeatherComponent,
        {
          provide: ActivatedRoute, useValue: {
            paramMap: of(new MockParams({ city: 'eldoret' }))
          }
        }
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(CurrentWeatherComponent);

    fixture.detectChanges();
    service = TestBed.get(WeatherService);
    router = TestBed.get(ActivatedRoute);
    locService = TestBed.get(LocationService);
  }));

  it('should be created', fakeAsync(() => {
    myComponent = fixture.componentInstance;
    fixture.detectChanges();
    expect(myComponent).toBeTruthy();
  }))

  it("should get current weather", () => {
    const weatherData = {};

    spyOn(service, 'getCurrentByLocation').and.returnValue(of(weatherData))

    myComponent.getWeatherByLocation(45.11, 68.00);

    fixture.detectChanges();

    expect(myComponent.weather).toEqual(weatherData);
  })

  it("should get current weather", () => {
    const location = {};

    spyOn(locService, 'searchPlaces').and.returnValue(of(location))

    myComponent.getLocations();

    fixture.detectChanges();

    expect(myComponent.weather).toEqual(location);
  })

  it("should get the weather", () => {
    const weather = {};

    spyOn(service, 'getCurrentByLocation').and.returnValue(of(weather));

    myComponent.getWeather();

    fixture.detectChanges();

    expect(myComponent.weather).toEqual(weather);
  })

  it('should return weather recommendation', () => {
    const recommendation = of('Lots of winds, Better get a cab');
    spyOn(myComponent, 'returnRecommentation').and.returnValue(of(recommendation));
    myComponent.returnRecommentation(45.2);
    fixture.detectChanges();
    // expect(myComponent.returnRecommentation('Mist')).toBe(recommendation);
  })
});
