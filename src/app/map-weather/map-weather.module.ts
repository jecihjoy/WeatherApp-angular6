import { NgModule } from "@angular/core";
import { MapWeatherComponent } from './map-weather.component';
import { mapRouting } from './map-weather.routes';
import { SharedModule } from "../shared/shared.module";

@NgModule({
    imports: [mapRouting, SharedModule],
    declarations: [MapWeatherComponent]
})

export class WeatherMapModule{
    
}