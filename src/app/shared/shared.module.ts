import { NgModule, ModuleWithProviders } from "@angular/core";
import { LocationService } from '../services/location.service';
import { WeatherService } from '../services/weather.service';

@NgModule({})

export class SharedModule{
    static forRoot(): ModuleWithProviders{
        return {
            ngModule: SharedModule,
            providers: [LocationService, WeatherService]
        };
    }
}