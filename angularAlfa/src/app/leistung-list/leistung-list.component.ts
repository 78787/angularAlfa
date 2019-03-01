import { Component, OnInit } from '@angular/core';
import { Leistung } from '../shared/leistung';
import { ProduktStoreService } from '../shared/produkt-store.service';

@Component({
  selector: 'ab-leistung-list',
  templateUrl: './leistung-list.component.html',
  styles: []
})
export class LeistungListComponent implements OnInit {
  leistungen: Leistung[];

  constructor(private ps: ProduktStoreService) { }

  ngOnInit() {
    this.ps.getAllLeistungen().subscribe(res => this.leistungen = res);
  }

}
