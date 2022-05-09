import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Concept } from '../models/concept';

@Component({
  selector: 'app-content-nav',
  templateUrl: './content-nav.component.html',
  styleUrls: ['./content-nav.component.css'],
})
export class ContentNavComponent implements OnInit {
  @Input() concept: Concept = AppComponent.getDefaultConcept();

  constructor() {}

  ngOnInit() {}
}
