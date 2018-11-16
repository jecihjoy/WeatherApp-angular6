import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Routes, Router } from '@angular/router';
import { MaterialModule } from '../material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { WeatherForecastComponent } from './weather-forecast.component';
import { LocationService } from '../services/location.service';
import { WeatherService } from '../services/weather.service';
import { CurrentWeatherComponent } from '../current-weather/current-weather.component';
import { of } from 'rxjs';

describe('WeatherForecastComponent', () => {
  let component: WeatherForecastComponent;
  let fixture: ComponentFixture<WeatherForecastComponent>;
  let wService: WeatherService;
  let lService: LocationService;

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
      providers: [LocationService, WeatherService,
        {
          provide: ActivatedRoute, useValue: {
            paramMap: of(new MockParams({ city: 'eldoret' }))
          }
        }

      ],
      declarations: [WeatherForecastComponent],
      imports: [MaterialModule, HttpClientTestingModule]
    })
      .compileComponents();
    fixture = TestBed.createComponent(WeatherForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    lService = TestBed.get(LocationService);
    wService = TestBed.get(WeatherService);
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  })

  it('should get weather forecast', () => {
    let wForecast = [];

    spyOn(wService, 'getWeatherForecast').and.returnValue(of(wForecast));

    component.getWeatherForecast(3.22, 35.11);

    fixture.detectChanges();

    expect(component.forecastData).toEqual(wForecast);
  })

  /*it('should call #getWeatherForecast on ngOnInit', () => {
    spyOn(lService, 'getCityLocation');

    component.callWeatherForecastWithLocation()

    fixture.detectChanges();

    expect(component.getWeatherForecast).toHaveBeenCalled();
  })*/

});
