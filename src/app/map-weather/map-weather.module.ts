import { NgModule } from "@angular/core";
import { MapWeatherComponent } from './map-weather.component';
import { mapRouting } from './map-weather.routes';

@NgModule({
    imports: [mapRouting],
    declarations: [MapWeatherComponent]
})

export class WeatherMapModule{
    
}