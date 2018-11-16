import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { LocationService } from './location.service';
import { tap } from 'rxjs/operators';
import { WeatherI } from '../modals/weather';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WeatherService implements OnInit {

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  constructor(private http: HttpClient) { }

   WEATHERURL = 'http://api.openweathermap.org/data/2.5';
   apiKey = '5e10f5ba642bc4e43318bec00b34c420';
   ServerUrl = 'http://localhost:3100';

  getHeaders() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return headers;
  }

  getCurrentByCityName(city: string): Observable<WeatherI> {
    let city_url = `${this.WEATHERURL}/weather?q=${city}&APPID=${this.apiKey}`;
    return this.http.get<WeatherI>(city_url);
  }
  getCurrentByLocation(longitude: any, lat: any): Observable<WeatherI> {
    let location_url = `${this.WEATHERURL}/weather?lat=${lat}&lon=${longitude}&APPID=${this.apiKey}`;
    return this.http.get<WeatherI>(location_url);
  }

  getWeatherForecast(long: any, lat: any): Observable<WeatherI[]> {
    const forecast_url = `${this.WEATHERURL}/forecast?lat=${lat}&lon=${long}&APPID=${this.apiKey}`;
    return this.http.get<WeatherI[]>(forecast_url);
  }

  getSavedData(): Observable<any> {
    let url = `${this.ServerUrl}/getData`;
    return this.http.get<any>(url).pipe(tap());
  }

  addData (data: any): Observable<any> {
    let url = `${this.ServerUrl}/saveData`
    return this.http.post<any>('http://localhost:3100/getData', data, httpOptions).pipe(
      tap((data: any) => console.log(data))
    );
  }
}

