import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'herramientas', url: '/herramientas', icon: 'mail' },
    { title: 'edad', url: '/edad', icon: 'paper-plane' },
    { title: 'genero', url: '/genero', icon: 'heart' },
    { title: 'universidades', url: '/universidades', icon: 'archive' },
    { title: 'clima', url: '/clima', icon: 'trash' },
    { title: 'logo', url: '/logo', icon: 'warning' },
    { title: 'contacto', url: '/contacto', icon: 'warning' },
  ];
  public labels = [];
  constructor() {}
}
