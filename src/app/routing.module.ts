import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CurrentWeatherComponent } from './current-weather/current-weather.component';

const routes: Routes = [
  { path: '', redirectTo: 'weather/eldoret', pathMatch: 'full' },
  { path: 'weather/eldoret', component: CurrentWeatherComponent },
  { path: 'weather/:city', component: CurrentWeatherComponent },
  { path: 'weather-map', loadChildren: './map-weather/map-weather.module#WeatherMapModule' }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
