import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from './weather.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private product: any = {};
  private products: any[] = [];
  weatherDetails;
  newWeatherDetails;
  refreshId;
  refresCityId;
  public query: string;
  checkData: boolean;
  checkDataClear: boolean;
  checkCloudDetails: boolean;
  cloudDetails: boolean;
  validCityList: Array<any> = [];
  validNewCity: any[] = [];
  deleteCheck: boolean = true;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() { }

  AddCity() {
    this.weatherService.getWeatherDetails(this.query).subscribe(
      (res) => {
        this.weatherDetails = res;
        this.checkData = true;
        if (this.validCityList.length < 8) {
          this.validCityList.unshift(res);
        }
        else {
          this.validCityList.splice(-1, 1);
          this.validCityList.unshift(res);
        }

      },
      err => {
        console.log(err);
        this.checkData = false;
      }
    );
    this.query = null;
  }

  RefreshCurrent(currentId, currentCityName) {
    this.weatherService.getWeatherDetails(currentCityName).subscribe(
      (res) => {
        this.weatherDetails = res;
        this.checkData = true;
        this.validCityList[currentId] = res;
      },
      err => {
        console.log(err);
        this.checkData = false;
      }
    );
  }

  AddNewCity(idx, cityid) {
    this.refreshId = idx;
    this.refresCityId = cityid;
    this.validNewCity = this.validCityList[idx];
    this.cloudDetails = true;
    this.weatherService.getfiveWeatherDetails(cityid).subscribe(
      data => {
        this.newWeatherDetails = data;
      })
  }

  RefreshCity() {
    this.validNewCity = this.validCityList[this.refreshId];
    this.cloudDetails = true;
    this.weatherService.getfiveWeatherDetails(this.refresCityId).subscribe(
      data => {
        this.newWeatherDetails = data;
      })
  }


  ClearCity() {
    this.validCityList = [];
    this.newWeatherDetails = [];
    this.cloudDetails = false;
    this.checkDataClear = false;

  }

  DeleteCity(Myproduct) {
    this.validCityList.splice(Myproduct, 1);
    this.newWeatherDetails = [];
    this.cloudDetails = false;
  }


}
