import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapWeatherComponent } from './map-weather.component';

describe('MapWeatherComponent', () => {
  let component: MapWeatherComponent;
  let fixture: ComponentFixture<MapWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapWeatherComponent ]
    })
    .compileComponents();
    component = TestBed.get(MapWeatherComponent);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
