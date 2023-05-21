import { Component } from '@angular/core';
import { WeatherService  } from '../services/weather.service'; //import WeatherService

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  city = '';
  temperature=0;
  description='';
  date='';
  country='';
  min=0;
  max=0;
  iconCode = '';
  constructor(private weatherAPI: WeatherService,){} //constructor for weatherAPI and create an object
  ngOnInit(){
    const defaultCity = 'Phnom Penh';
    this.getWeatherData(defaultCity); //whenever file run, it will get weather data
  }

  getWeatherData(city: string){ //use getWeatherData fucntion, and also allow getWeatherData to accept a city name
    this.weatherAPI.getWeatherData(city).subscribe((response) => {
      this.city = response.name;
      this.temperature = Math.round(response.main.temp);
      this.description = response.weather[0].main;
      this.date = response.dt;
      this.min = response.main.temp_min;
      this.max = response.main.temp_max;
      this.iconCode = response.weather[0].icon;
    }); 
  }

  searchCity(event: any){ //create a new function call searchCity that accept any
    let city = event.target.value; // make city to become the target value
    this.weatherAPI.getWeatherData(city).subscribe((response) => { //take the newly input city and send it to getWeatherData() for API call
      // later on it will input like above
      this.city = response.name;
      this.temperature = Math.round(response.main.temp);
      this.description = response.weather[0].main;
      this.date = response.dt;
      this.min = response.main.temp_min;
      this.max = response.main.temp_max;
      this.iconCode = response.weather[0].icon;
    });
  }
}
