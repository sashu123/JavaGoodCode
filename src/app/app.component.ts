import { Component, OnInit } from '@angular/core';
import { DataLoader } from './data-loader';
import { Concept } from './models/concept';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  concepts: Concept[] = [AppComponent.getDefaultConcept()];
  currentConcept: Concept = AppComponent.getDefaultConcept();

  ngOnInit() {
    DataLoader.getConcepts().subscribe((data: Concept[]) => {
      console.log(data);
      this.concepts = data;
      this.activateClass(this.concepts[0]);
    });
  }

  static getDefaultConcept(): Concept {
    return { name: '', active: false };
  }

  activateClass(concept: Concept) {
    if (concept.active === true) {
      return;
    }
    this.currentConcept = concept;
    this.concepts.forEach(function (item) {
      let isCurrentItem = item.name == concept.name;
      if (isCurrentItem) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
  }
}
