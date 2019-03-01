import { Component, Input } from '@angular/core';
import { Produkt } from '../shared/produkt';

@Component({
  selector: 'a.ab-produkt-list-item',
  templateUrl: './produkt-list-item.component.html',
  styles: []
})
export class ProduktListItemComponent {

  constructor() { }

  @Input() produkt: Produkt;

}
