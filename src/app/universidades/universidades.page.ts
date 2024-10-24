import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-universidades',
  templateUrl: './universidades.page.html',
  styleUrls: ['./universidades.page.scss'],
})
export class UniversidadesPage implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  country: string = '';
  universities: any[] = [];

  searchUniversities() {
    this.http
      .get(`http://universities.hipolabs.com/search?country=${this.country}`)
      .subscribe((data: any) => {
        this.universities = data;
      });
  }



}
