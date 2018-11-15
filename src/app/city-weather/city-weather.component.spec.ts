import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CityWeatherComponent } from './city-weather.component';
import { LocationService } from '../services/location.service';
import { WeatherService } from '../services/weather.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import * as MockData from '../services/Weather-MockData.json';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CityWeatherComponent', () => {
  let wService: WeatherService;
  let cityComponent: CityWeatherComponent;
  let fixture: ComponentFixture<CityWeatherComponent>;
  // let fakeService = jasmine.createSpyObj('WeatherService', ['getCurrentByCityName']);


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CityWeatherComponent],
      providers: [LocationService, WeatherService, FormBuilder,
        {
          provide: ActivatedRoute, useValue: {
            params: of({ id: 'eldoret' })
          }
        }
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(CityWeatherComponent);
    wService = TestBed.get(WeatherService);
    cityComponent = fixture.componentInstance;
    fixture.detectChanges();

  }));

  it('should be created', () => {
    expect(cityComponent).toBeDefined()
  })

  it('should return city weather', () => {
    let mockdata = MockData[0];
    let spy = spyOn(cityComponent, 'getCurrentWeather')
    .and.returnValue(mockdata);
    expect(mockdata).toEqual(cityComponent.getCurrentWeather('kisii'));
    expect(spy.calls.any()).toBe(true, 'getCurrentWeather Called');
  })

  it('expect getCurrentWeather to be defined', () => {
    expect(cityComponent.getCurrentWeather).toBeDefined();
  })

});
