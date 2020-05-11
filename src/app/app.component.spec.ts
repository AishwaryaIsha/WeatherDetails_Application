import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { WeatherService } from './weather.service';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { EpochToDatePipe } from './epoch-to-date.pipe';

const cityData = {
  "coord": {
    "lon": -0.13,
    "lat": 51.51
  },
  "weather": [
    {
      "id": 802,
      "main": "Clouds",
      "description": "scattered clouds",
      "icon": "03d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 285.07,
    "feels_like": 277.94,
    "temp_min": 283.71,
    "temp_max": 286.48,
    "pressure": 1020,
    "humidity": 34
  },
  "visibility": 10000,
  "wind": {
    "speed": 6.7,
    "deg": 60,
    "gust": 11.8
  },
  "clouds": {
    "all": 41
  },
  "dt": 1589211747,
  "sys": {
    "type": 1,
    "id": 1414,
    "country": "GB",
    "sunrise": 1589170456,
    "sunset": 1589225975
  },
  "timezone": 3600,
  "id": 2643743,
  "name": "London",
  "cod": 200
};

const cityDataFiveDays = {
  "city": {
    "id": 2643743,
    "name": "London",
    "coord": {
      "lon": -0.1257,
      "lat": 51.5085
    },
    "country": "GB",
    "population": 0,
    "timezone": 3600
  },
  "cod": "200",
  "message": 0.1010895,
  "cnt": 5,
  "list": [
    {
      "dt": 1589194800,
      "sunrise": 1589170456,
      "sunset": 1589225974,
      "temp": {
        "day": 285.07,
        "min": 279.34,
        "max": 285.07,
        "night": 279.34,
        "eve": 284.13,
        "morn": 285.07
      },
      "feels_like": {
        "day": 277.17,
        "night": 274.6,
        "eve": 277.27,
        "morn": 277.17
      },
      "pressure": 1020,
      "humidity": 34,
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "speed": 7.8,
      "deg": 36,
      "clouds": 30
    },
    {
      "dt": 1589281200,
      "sunrise": 1589256761,
      "sunset": 1589312468,
      "temp": {
        "day": 287.35,
        "min": 278.55,
        "max": 287.35,
        "night": 282.03,
        "eve": 285.63,
        "morn": 278.55
      },
      "feels_like": {
        "day": 283.67,
        "night": 278.54,
        "eve": 281.46,
        "morn": 275.04
      },
      "pressure": 1021,
      "humidity": 35,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "sky is clear",
          "icon": "01d"
        }
      ],
      "speed": 2.21,
      "deg": 326,
      "clouds": 0
    },
    {
      "dt": 1589367600,
      "sunrise": 1589343069,
      "sunset": 1589398961,
      "temp": {
        "day": 287.27,
        "min": 279.75,
        "max": 287.27,
        "night": 279.75,
        "eve": 282.72,
        "morn": 280.72
      },
      "feels_like": {
        "day": 282.55,
        "night": 274.58,
        "eve": 277.7,
        "morn": 277.3
      },
      "pressure": 1017,
      "humidity": 37,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "sky is clear",
          "icon": "01d"
        }
      ],
      "speed": 3.84,
      "deg": 52,
      "clouds": 1
    },
    {
      "dt": 1589454000,
      "sunrise": 1589429379,
      "sunset": 1589485453,
      "temp": {
        "day": 285.57,
        "min": 279.56,
        "max": 286.31,
        "night": 279.88,
        "eve": 284.64,
        "morn": 279.56
      },
      "feels_like": {
        "day": 279.52,
        "night": 275.31,
        "eve": 278.87,
        "morn": 273.76
      },
      "pressure": 1021,
      "humidity": 41,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "sky is clear",
          "icon": "01d"
        }
      ],
      "speed": 5.71,
      "deg": 49,
      "clouds": 9
    },
    {
      "dt": 1589540400,
      "sunrise": 1589515690,
      "sunset": 1589571944,
      "temp": {
        "day": 286.96,
        "min": 279.29,
        "max": 286.96,
        "night": 281.57,
        "eve": 285.71,
        "morn": 279.29
      },
      "feels_like": {
        "day": 282.21,
        "night": 278.29,
        "eve": 281.44,
        "morn": 274.96
      },
      "pressure": 1025,
      "humidity": 45,
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "speed": 4.42,
      "deg": 39,
      "clouds": 12
    }
  ]
};

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let appComponent: AppComponent;
  let weatherService: any;
  class MockWeatherService{
    getWeatherDetails = jasmine.createSpy().and.returnValue(of(cityData));
    getfiveWeatherDetails = jasmine.createSpy().and.returnValue(of(cityDataFiveDays));
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        AppComponent,SearchPipe,
        EpochToDatePipe
      ],
      providers: [
        { provide: WeatherService , useClass: MockWeatherService}

      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.debugElement.componentInstance;
    weatherService = TestBed.get(WeatherService);
  }));

  it('should create the app', () => {
    
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`AddCity: CityList should be updated with fetched weather details`, () => {
    appComponent.query = "London";
    appComponent.AddCity();
    expect(appComponent.validCityList.length).toBe(1);
    expect(appComponent.validCityList[0].name).toBe("London");
  });

  it('RefershCurrent: should update data in valicitylist on refresh', () => {
    appComponent.query = "London";
    appComponent.AddCity();
    expect(appComponent.validCityList.length).toBe(1);
    expect(appComponent.validCityList[0].weather[0].main).toBe("Clouds");
    const updatedData = Object.assign({},cityData)
    updatedData.weather[0].main = "Rain";
    weatherService.getWeatherDetails.and.returnValue(of(updatedData));
    appComponent.RefreshCurrent(0, "London");
    expect(appComponent.validCityList[0].weather[0].main).toBe("Rain");
  });

  it('AddNewCity: Fetch 5 day data', () => {
    appComponent.query = "London";
    appComponent.AddCity();
    expect(appComponent.newWeatherDetails).toBeUndefined();
    appComponent.AddNewCity(0,2643743);
    expect(appComponent.newWeatherDetails.city.name).toBe("London");
    expect(appComponent.newWeatherDetails.city.id).toBe(2643743);
  });

  it('RefreshCity: Refresh city detailsin right panel', () => {
    appComponent.query = "London";
    appComponent.AddCity();
    appComponent.AddNewCity(0,2643743);
    expect(appComponent.newWeatherDetails.list[0].pressure).toBe(1020);
    const updatedData = Object.assign({},cityDataFiveDays);
    updatedData.list[0].pressure = 1022;
    weatherService.getfiveWeatherDetails.and.returnValue(of(updatedData));
    appComponent.AddNewCity(0,2643743);
    expect(appComponent.newWeatherDetails.list[0].pressure).toBe(1022);
  })

  it('ClearCity: Should clear the city details', () => {
    appComponent.query = "London";
    appComponent.AddCity();
    expect(appComponent.validCityList.length).toBe(1);
    appComponent.ClearCity();
    expect(appComponent.validCityList.length).toBe(0);
    expect(appComponent.newWeatherDetails.length).toBe(0);
    expect(appComponent.cloudDetails).toBeFalsy();
    expect(appComponent.checkDataClear).toBeFalsy();
  });

  it('DeleteCity: Delete from valid citylist', () => {
    appComponent.validCityList = [
      {name: "London", id:123},
      {name: "New York", id: 456}
    ];
    appComponent.DeleteCity(1);
    expect(appComponent.validCityList.length).toBe(1);
  });
});
