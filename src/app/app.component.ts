import { Component } from '@angular/core';
import { Concept } from './models/concept';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  subModules: Concept[] = [
    AppComponent.getDefaultConcept(),
    { name: 'Collection', active: false },
    { name: 'Junit', active: false },
  ];
  currentConcept: Concept = AppComponent.getDefaultConcept();

  static getDefaultConcept(): Concept {
    return { name: 'java8', active: true };
  }

  activateClass(subModule: Concept) {
    if (subModule.active) {
      return;
    }
    this.currentConcept = subModule;
    this.subModules.forEach(function (item) {
      let isCurrentItem = item.name == subModule.name;
      if (isCurrentItem) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
  }
}
