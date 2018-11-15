import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MoodWeatherComponent } from './mood-weather.component';
import { By } from '@angular/platform-browser';
import { FormGroup, AbstractControl } from '@angular/forms';
import { MaterialModule } from '../material.module';

describe('MoodWeatherComponent', () => {
  let component: MoodWeatherComponent;
  let fixture: ComponentFixture<MoodWeatherComponent>;
  let mood: any, activities: any, weatherForm: FormGroup;
  let moodFormControl: AbstractControl;
  let activitiesFormControl: AbstractControl;

  let data = {
    mood: 'sick',
    activities: 'coding'

  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, FormsModule,MaterialModule, NgxPaginationModule, ReactiveFormsModule ],
      declarations: [MoodWeatherComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(MoodWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

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
});
