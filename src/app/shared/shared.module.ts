import { NgModule, ModuleWithProviders } from "@angular/core";
import { LocationService } from '../services/location.service';
import { WeatherService } from '../services/weather.service';
import { HighlightDirective } from "./hightlight.directive";

@NgModule({
    declarations: [HighlightDirective],
    exports: [ HighlightDirective ]
  })

export class SharedModule{
    static forRoot(): ModuleWithProviders{
        return {
            ngModule: SharedModule,
            providers: [LocationService, WeatherService]
        };
    }
}