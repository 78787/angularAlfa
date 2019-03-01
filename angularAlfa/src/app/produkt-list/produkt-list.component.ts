import { Component, OnInit } from '@angular/core';
import { Produkt } from '../shared/produkt';
import { ProduktStoreService } from '../shared/produkt-store.service';


@Component({
  selector: 'ab-produkt-list',
  templateUrl: './produkt-list.component.html',
  styles: []
})
export class ProduktListComponent implements OnInit {

  produkte: Produkt[];

  constructor(private ps: ProduktStoreService) { }

  ngOnInit() {
    this.ps.getAll().subscribe(res => this.produkte = res);
  }

}
