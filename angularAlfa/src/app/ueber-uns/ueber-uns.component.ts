import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { ProduktStoreService } from '../shared/produkt-store.service';

@Component({
  selector: 'ab-ueber-uns',
  templateUrl: './ueber-uns.component.html',
  styles: []
})
export class UeberUnsComponent implements OnInit {
  personen: Person[];

  constructor(private ps: ProduktStoreService) { }

  ngOnInit() {
    this.ps.getAllPersonen().subscribe(res => this.personen = res);
  }

}
