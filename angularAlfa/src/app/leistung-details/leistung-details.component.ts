import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Leistung } from '../shared/leistung';
import { LeistungFactory } from '../shared/leistung-factory';

import { ProduktStoreService } from '../shared/produkt-store.service';

@Component({
  selector: 'ab-leistung-details',
  templateUrl: './leistung-details.component.html',
  styles: []
})
export class LeistungDetailsComponent implements OnInit {
  leistung: Leistung = LeistungFactory.empty();

  constructor(
    private ps: ProduktStoreService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.ps.getSingleLeistung(params['id'])
      .subscribe(l => this.leistung = l);
  }

  removeLeistungButton() {
    if (confirm('Leistung wirklich löschen?')) {
      this.ps.removeLeistung(this.leistung.id)
        .subscribe(res => this.router.navigate(['../'], { relativeTo: this.route }));
    }
  }

  updateLeistungButton() {
    if (confirm('Leistung wirklich bearbeiten?')) {
      this.ps.updateLeistung(this.leistung)
        .subscribe(res => this.router.navigate(['../../leistungen-form'], { relativeTo: this.route }));
    }
  }
}
