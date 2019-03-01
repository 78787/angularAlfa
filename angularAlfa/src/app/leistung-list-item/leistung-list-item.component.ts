import { Component, Input } from '@angular/core';
import { Leistung } from '../shared/leistung';

@Component({
  selector: 'a.ab-leistung-list-item',
  templateUrl: './leistung-list-item.component.html',
  styles: []
})
export class LeistungListItemComponent {

  constructor() { }

  @Input() leistung: Leistung;

}
