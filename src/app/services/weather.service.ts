import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
      private http: HttpClient,  
  ) { }

  getWeatherData(city: string): Observable<any> {
    let apiId = '298a75146925a48cc50bf4837105a883';
    let queryString = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&exclude=minutely,hourly,alerts&appid=${apiId}`;
    return this.http.get(queryString);
  }
}