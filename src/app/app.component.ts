import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Bienvenido', url: '/welcome', icon: 'home' },
    { title: 'Sobre nosotros', url: '/about', icon: 'people' },
    { title: 'Clima', url: '/clima', icon: 'sunny' },
    { title: 'Conversor', url: '/conversor', icon: 'wallet' },
    { title: 'agregar usuarios', url: '/home', icon: 'people' },
    { title: 'Cerrar sesion', url: '/login', icon: 'log-out' },
  ];
  constructor() {}
}
