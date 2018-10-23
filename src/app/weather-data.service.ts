import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  API_KEY = "2b1eed97055779f4e575ab64e44e8761";
  url;

  constructor(public http:HttpClient) {
    this.url = 'https://api.openweathermap.org/data/2.5/weather?q=';
  }
  getWeather(city, country) {
    console.log(this.http.get(this.url + city + "," + country + "&appid=" + this.API_KEY + "&units=metric"));
    return this.http.get(this.url + city + "," + country + "&appid=" + this.API_KEY + "&units=metric");
  }
}
