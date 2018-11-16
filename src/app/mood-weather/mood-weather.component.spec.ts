import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MoodWeatherComponent } from './mood-weather.component';
import { By } from '@angular/platform-browser';
import { FormGroup, AbstractControl } from '@angular/forms';
import { MaterialModule } from '../material.module';
import * as MockData from '../services/Weather-MockData.json';
import { WeatherService } from '../services/weather.service';
import { of } from 'rxjs';

describe('MoodWeatherComponent', () => {
  let component: MoodWeatherComponent;
  let fixture: ComponentFixture<MoodWeatherComponent>;
  let mood: any, activities: any, weatherForm: FormGroup;
  let moodFormControl: AbstractControl;
  let activitiesFormControl: AbstractControl;
  let service;

  let data = {
    mood: 'sick',
    activities: 'coding'

  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, MaterialModule, NgxPaginationModule, ReactiveFormsModule],
      declarations: [MoodWeatherComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(MoodWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(WeatherService);
  }));

  it('should be defined', () => {
    expect(component).toBeDefined();
  })

  it('should set values', () => {
    mood = fixture.debugElement.query(By.css('#mood'));
    activities = fixture.debugElement.query(By.css('#activities'));

    weatherForm = component.weatherForm;
    moodFormControl = weatherForm.controls['mood'];
    activitiesFormControl = weatherForm.controls['activities'];

    fixture.whenStable().then(() => {
      expect(moodFormControl.valid).toBe(false);
      expect(activitiesFormControl.valid).toBe(false);
      expect(weatherForm.valid).toBe(false);
    })
  })

  it('should return moods and activities', () => {
    let spy = spyOn(component, 'getSavedData')
      .and.returnValue(MockData[2]);
    expect(component.getSavedData()).toEqual(MockData[2]);
    expect(component.getSavedData).toHaveBeenCalled();
  })

  it("should get data",
    async(() => {
      const data = MockData[2];

      spyOn(service, 'getSavedData').and.returnValue(of(data))

      component.getSavedData();

      fixture.detectChanges();

      expect(component.savedData).toEqual(data);
    })
  );

  it("should get current weather", () => {
    const weatherData = {};

    spyOn(service, 'getCurrentByLocation').and.returnValue(of(weatherData))

    component.getWeatherByLocation(23.11, 35.11);

    fixture.detectChanges();

    expect(component.weather).toEqual(weatherData);
  })
});
