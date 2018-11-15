import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-map-weather',
  templateUrl: './map-weather.component.html',
  styleUrls: ['./map-weather.component.css']
})
export class MapWeatherComponent implements OnInit {
subscription: Subscription;
title = 'map-weather is working!';

  constructor( private locationService: LocationService) {
    this.subscription = new Subscription();
   }

  ngOnInit() {
  }
}
