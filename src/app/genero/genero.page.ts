import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
})
export class GeneroPage implements OnInit{

  name: string = '';
  gender: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }


  getGender(name: string): Observable<any> {
    return this.http.get(`https://api.genderize.io/?name=${name}`);
  }

  predictGender() {
    this.http.get(`https://api.genderize.io/?name=${this.name}`).subscribe((data: any) => {
      this.gender = data.gender;
    });

    
  
}}
