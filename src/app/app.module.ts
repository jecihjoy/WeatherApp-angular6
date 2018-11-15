import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './routing.module';
import { MaterialModule } from './material.module';
import { NgxPaginationModule } from 'ngx-pagination';
import 'hammerjs';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MoodWeatherComponent } from './mood-weather/mood-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherForecastComponent,
    CurrentWeatherComponent,
    MoodWeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
