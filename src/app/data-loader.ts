import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { InjectorInstance } from './app.module';
import { Overview } from './models/Overview';

@Component({ template: '' })
export class DataLoader {
  constructor() {}
  ngOnInit() {
    DataLoader.getOverview('java8');
  }

  static getOverview(name: string): Observable<Overview> {
    const httpClient = InjectorInstance.get<HttpClient>(HttpClient);
    return httpClient.get<Overview>('assets/data/overview/' + name + '.json');
  }
}
