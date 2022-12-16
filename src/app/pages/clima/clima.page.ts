import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Geolocation } from '@capacitor/geolocation';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;


@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {
  weatherTemp :any
  weatherDescription :any
  coordenadas :any
  latitud :any
  longitud :any
  todayDate = new Date()
  cityName : any
  weatherIcon: any
  clima :any;
  icono: any;

  constructor(private router: Router,public httpClient:HttpClient) {
    this.fetchLocation()
    
   }
   async fetchLocation(){
    const location = await Geolocation.getCurrentPosition();
      console.log('location = ', location);
      this.coordenadas = location['coords']
      this.latitud = this.coordenadas['latitude']
      this.longitud = this.coordenadas['longitude']
      console.log('latitud = ',this.latitud);
      console.log('longitud = ',this.longitud);
      this.loadData();
  }

  ngOnInit() {
  }

  loadData(){
      this.httpClient.get(`${API_URL}/weather?lat=${this.latitud}&lon=${this.longitud}&appid=${API_KEY}&units=metric`).subscribe(resultado =>{
      console.log(resultado);
      //this.weatherTemp = resultado.main
      this.clima = resultado;
      this.icono = this.clima['weather'];
      this.icono = this.icono['icon'];

      //this.cityName = results['name']
      //this.weatherDescription = results['weather']
      //this.weatherDescription = this.weatherDescription['0']
      //console.log(this.weatherTemp);
      //console.log(this.weatherDescription);
      //console.log(this.cityName);
       
    })
  }

}