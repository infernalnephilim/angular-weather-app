import {Component, OnInit} from '@angular/core';
import {WeatherDataService} from "../weather-data.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  location = {
    city: 'Warsaw',
    country: 'Poland'
  };
  weather: any;

  constructor(private _weatherDataService: WeatherDataService) {
  }

  ngOnInit() {
    this._weatherDataService.getWeather(this.location.city, this.location.country).subscribe(
      result => {
        console.log(result);
        this.weather = result;
      }
    );
  }

}
