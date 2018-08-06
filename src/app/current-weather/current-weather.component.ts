import { Component, OnInit } from '@angular/core'
import { ICurrentWeather } from '../interfaces'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather
  constructor(private weatherService: WeatherService) {
    this.current = {
      city: 'Sometown',
      country: 'US',
      date: new Date(),
      image: 'assets/img/sunny.png',
      temperature: 77,
      description: 'Sunny',
    } as ICurrentWeather
  }

  ngOnInit() {
    this.weatherService
      .getCurrentWeather('Sometoown', 'US')
      .subscribe(data => (this.current = data))
  }
}
