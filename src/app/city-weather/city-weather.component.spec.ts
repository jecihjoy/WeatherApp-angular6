import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityWeatherComponent } from './city-weather.component';

describe('CityWeatherComponent', () => {
  let cityComponent: CityWeatherComponent;
  let fixture: ComponentFixture<CityWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityWeatherComponent ]
    })
    .compileComponents();
    cityComponent = TestBed.get(CityWeatherComponent);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWeatherComponent);
    cityComponent = fixture.componentInstance;
    fixture.detectChanges();
  });
});
