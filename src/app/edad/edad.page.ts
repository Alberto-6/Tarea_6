import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
})
export class EdadPage implements OnInit {

  constructor(private http: HttpClient) { }

  private baseUrl = 'https://api.agify.io';

  name: string = "";
  age: any;

  ngOnInit() {
  }

  predictAge() {
    // Aquí deberías agregar la lógica que predice la edad
    this.age = {
      age: 25 // Ejemplo de edad predicha
    };
  }

  getAge(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/?name=${name}`);;
  }

  getAgeMessage(age: number): string {
    if (age < 18) return 'Joven';
    if (age < 60) return 'Adulto';
    return 'Anciano';
  }

  getAgeImage(age: number): string {
    if (age < 18) return 'assets/images/joven.jpg';
    if (age < 60) return 'assets/images/adulto.jpg';
    return 'assets/images/viejo.jpg';
  }
}


