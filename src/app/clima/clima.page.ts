import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../services/clima.service'


@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit { 
  

//private apiKey = 'TU_API_KEY_DE_OPENWEATHER'; // Reemplaza con tu API Key
  //private apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Santo%20Domingo&units=metric&appid=';

  cityName: string = '';
  weatherData: any;

  constructor(private climaService: ClimaService)  { }

  ngOnInit() {
  }

  getClima() {
    if (this.cityName.trim() === '') {
      alert('Please enter a city name');
      return;
    }

    this.climaService.getClima(this.cityName).subscribe(
      (data) => {
        this.weatherData = data;
      },
      (error) => {
        console.error('Error fetching weather data', error);
        alert('City not found or error fetching data.');
      }
    );
  }
}

  //getWeather(): Observable<any> {
    //return this.http.get(`${this.apiUrl}${this.apiKey}`);
  //}


