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

  constructor( private locationService: LocationService) {
    this.subscription = new Subscription();
   }

  ngOnInit() {
    this.getLocations('eldoret');
  }

  getLocations(town){
    this.subscription.add(
      this.locationService.getCityLocation(town)
      .subscribe((data) => {
        console.log('weatherdata', data);
      })
    )
  }
}
