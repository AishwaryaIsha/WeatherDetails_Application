import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeatherDetails(city){
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=c51223c219d6aec8cb8c5210449bd859");
  }

  getfiveWeatherDetails(cityID){
  return this.http.get("http://api.openweathermap.org/data/2.5/forecast/daily?id="+cityID+"&cnt=5&appid=c51223c219d6aec8cb8c5210449bd859");
  }

}
