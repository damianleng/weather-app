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
    let apiId = ''; // your api id
    let queryString = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&exclude=minutely,hourly,alerts&appid=${apiId}`;
    return this.http.get(queryString);
  }
}
