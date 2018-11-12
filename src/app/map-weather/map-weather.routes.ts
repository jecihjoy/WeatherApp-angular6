import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { MapWeatherComponent } from './map-weather.component';

const routes: Routes  = [
    { path: '', component: MapWeatherComponent}
]

export const mapRouting: ModuleWithProviders = RouterModule.forChild(routes);