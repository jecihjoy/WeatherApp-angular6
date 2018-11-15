import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { MaterialModule } from '../material.module';
import { CurrentWeatherComponent } from './current-weather.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LocationService } from '../services/location.service';
import { WeatherService } from '../services/weather.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Subscription } from 'rxjs';
import { MoodWeatherComponent } from '../mood-weather/mood-weather.component';
import { WeatherForecastComponent } from '../weather-forecast/weather-forecast.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CurrentWeatherComponent', () => {
  let myComponent: CurrentWeatherComponent;
  let fixture: ComponentFixture<CurrentWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, NgxPaginationModule, MaterialModule, HttpClientTestingModule, RouterTestingModule.withRoutes([]) ],
      declarations: [ CurrentWeatherComponent,MoodWeatherComponent, WeatherForecastComponent ],
      providers: [LocationService, WeatherService, FormBuilder, 
        {
          provide: ActivatedRoute, useValue: {
            params: of({id: 'eldoret'})
          }
        }
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CurrentWeatherComponent);
    myComponent = fixture.componentInstance;
    fixture.detectChanges();
  }));
  it('should be created', () => {
    expect(myComponent).toBeTruthy();
  })
});
