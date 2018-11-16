import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LocationService } from '../services/location.service';
import { MapWeatherComponent } from './map-weather.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MapWeatherComponent', () => {
  let component: MapWeatherComponent;
  let fixture: ComponentFixture<MapWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LocationService],
      declarations: [MapWeatherComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(MapWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeDefined();
  })

  it('should display text in p tags', () => {
    let p: HTMLElement;
    // expect(de.query(By.css('p')).nativeElement.innerText).toBe('dash works!');
    p = fixture.nativeElement.querySelector('p');
    expect(p.textContent).toContain(component.title);
  })

});
