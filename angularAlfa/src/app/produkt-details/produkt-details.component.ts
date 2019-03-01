import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Produkt } from '../shared/produkt';
import { ProduktFactory } from '../shared/produkt-factory';

import { ProduktStoreService } from '../shared/produkt-store.service';

@Component({
  selector: 'ab-produkt-details',
  templateUrl: './produkt-details.component.html',
  styles: []
})
export class ProduktDetailsComponent implements OnInit {
  produkt: Produkt = ProduktFactory.empty();

  constructor(
    private ps: ProduktStoreService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.ps.getSingle(params['id'])
      .subscribe(p => this.produkt = p);
  }

  removeProdukt() {
    if (confirm('Produkt wirklich löschen?')) {
      this.ps.remove(this.produkt.id)
        .subscribe(res => this.router.navigate(['../'], { relativeTo: this.route }));
    }
  }

  updateProdukt() {
    if (confirm('Produkt wirklich bearbeiten?')) {
      this.ps.update(this.produkt)
        .subscribe(res => this.router.navigate(['../../produkte-form'], { relativeTo: this.route }));
    }
  }

}
