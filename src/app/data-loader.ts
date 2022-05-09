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

  static getConcepts():Observable<Concept[]> {
    const httpClient = InjectorInstance.get<HttpClient>(HttpClient);
    return httpClient.get<Concept[]>('assets/data/concepts.json');
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
