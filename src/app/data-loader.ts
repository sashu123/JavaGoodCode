import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InjectorInstance } from './app.module';
import { Concept } from './models/concept';
import { Overview } from './models/Overview';

@Injectable({
  providedIn: 'root',
})
export class DataLoader {
  static subModules: Concept[] = [
    { name: 'java8', active: true },
    { name: 'Collection', active: false },
    { name: 'Junit', active: false },
  ];

  static getConcepts():Concept[] {
    return this.subModules;
  }

  constructor() {}
  ngOnInit() {
    DataLoader.getOverview('java8');
  }

  static getOverview(name: string): Observable<Overview> {
    const httpClient = InjectorInstance.get<HttpClient>(HttpClient);
    return httpClient.get<Overview>('assets/data/overview/' + name + '.json');
  }
}
