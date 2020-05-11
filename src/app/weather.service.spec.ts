import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let httpMock: HttpTestingController;
  let service: WeatherService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService]
    });
    service = TestBed.get(WeatherService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: WeatherService = TestBed.get(WeatherService);
    expect(service).toBeTruthy();
  });

  it('getWeatherDetails: fetch weatherdetails',(done) => {
    const data = service.getWeatherDetails("London").toPromise();
    const request = httpMock.expectOne("http://api.openweathermap.org/data/2.5/weather?q=London&appid=c51223c219d6aec8cb8c5210449bd859")
    request.flush("Data Fetched")
    data.then(response => {
      expect(response).toBe("Data Fetched");
      done();
    });
  });

  it('getfiveWeatherDetails: fetch five weather details',(done) => {
    const data = service.getfiveWeatherDetails(2643743).toPromise();
    const request = httpMock.expectOne("http://api.openweathermap.org/data/2.5/forecast/daily?id=2643743&cnt=5&appid=c51223c219d6aec8cb8c5210449bd859")
    request.flush("Data Fetched")
    data.then(response => {
      expect(response).toBe("Data Fetched");
      done();
    });
  });
});
