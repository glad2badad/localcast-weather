import 'hammerjs'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { CurrentWeatherComponent } from './current-weather/current-weather.component'
import { WeatherService } from 'src/app/weather/weather.service'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './/material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CitySearchComponent } from './city-search/city-search.component'

@NgModule({
  declarations: [AppComponent, CurrentWeatherComponent, CitySearchComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
