import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-mood-weather',
  templateUrl: './mood-weather.component.html',
  styleUrls: ['./mood-weather.component.css']
})
export class MoodWeatherComponent implements OnInit {
  savedData = [];
  testData: any = [];
  page: number = 1;
  weather: any = {}
  mood = new FormControl('', [Validators.required, Validators.minLength(5)]);
  activities = new FormControl('', [Validators.required, Validators.minLength(5)]);

  weatherForm: FormGroup = this.fBuilder.group({
    mood: this.mood,
    activities: this.activities
  })

  constructor(private fBuilder: FormBuilder,
    private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeatherByLocation(35.27, 0.52);
    this.getSavedData();
  }

  save() {
    const weatherInfo = {
      'temp': this.weather.w_temp,
      'main': this.weather.w_main,
      'desc': this.weather.w_desc
    }

    const moodInfo = {
      'mood': this.weatherForm.value.mood
    }

    const activities = {
      'activities': this.weatherForm.value.activities
    }
    const toServer = {
      'weatherInfo': weatherInfo,
      'moodInfo': moodInfo,
      'activities': activities
    };

    console.log(JSON.stringify(weatherInfo));
    this.weatherService.addData(toServer);
  }

  getWeatherByLocation(long: any, lat: any) {
    this.weatherService.getCurrentByLocation(long, lat)
      .subscribe((data) => {
        var weatherObj = {};
        weatherObj['w_main'] = data.weather[0].main;
        weatherObj['w_desc'] = data.weather[0].description;
        weatherObj['icon'] = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        weatherObj['w_temp'] = data.main.temp;
        this.weather = weatherObj;
        this.testData = data;
      console.log('DATA', this.testData);

      })
      return this.weather;
  }

  getSavedData() {
    this.weatherService.getSavedData().subscribe((data) => {
      console.log('data data', data);
      data.forEach(dat => {
        this.savedData.push(dat);
      });
      console.log(this.savedData);
    })
  }
}
