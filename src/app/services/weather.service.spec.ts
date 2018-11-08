import { TestBed, inject } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { Location }  from '../modals/locations';
describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherService]
    });
  });
});
