import { async, ComponentFixture,  TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { CityWeatherComponent } from './city-weather.component';
import { LocationService } from '../services/location.service';
import { WeatherService } from '../services/weather.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('CityWeatherComponent', () => {
  let cityComponent: CityWeatherComponent;
  let fixture: ComponentFixture<CityWeatherComponent>;

  const fakeActivatedRoute = {
    snapshot: { data: {  } }
  } as ActivatedRoute;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ CityWeatherComponent ],
  //     providers: [LocationService, WeatherService, FormBuilder,
  //         {
  //           providers: [
  //             { provider: ComponentFixtureAutoDetect, useValue: true },
  //             { provider: ActivatedRoute, useValue: {
  //               params: of({id: 123})
  //             } }
  //           ]
  //         }
  //     ]
  //   })
  //   .compileComponents();
  // }));




  // beforeEach(() => {
  //   fixture = TestBed.createComponent(CityWeatherComponent);
  //   cityComponent = fixture.componentInstance;
  // });
  // it('should be created', () => {
  //   expect(cityComponent).toBeDefined()
  // })

  // it('should display title in the h1 tags', () => {
  //   let h1: HTMLElement;
  //   h1 = fixture.nativeElement.querySelector('h1');
  //   fixture.detectChanges();
  //   expect(h1.textContent).toContain(cityComponent.title);
  // })
});
