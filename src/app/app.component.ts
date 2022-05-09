import { Component, OnInit } from '@angular/core';
import { DataLoader } from './data-loader';
import { Concept } from './models/concept';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  subModules: Concept[] = [{ name: '', active: false }];
  currentConcept: Concept = AppComponent.getDefaultConcept();

  ngOnInit() {
    DataLoader.getConcepts().subscribe((data: Concept[]) => {
      console.log(data);
      this.subModules = data;
    });
  }

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
