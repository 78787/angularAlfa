import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Leistung } from '../shared/leistung';
import { LeistungFactory } from '../shared/leistung-factory';
import { ProduktStoreService } from '../shared/produkt-store.service';
import { LeistungFormErrorMessages } from './leistung-form-error-messages';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'ab-leistung-form',
  templateUrl: './leistung-form.component.html',
  styles: []
})
export class LeistungFormComponent implements OnInit {
  @ViewChild('myLeistungForm') myLeistungForm: NgForm;
  leistung = LeistungFactory.empty();
  errors: { [key: string]: string } = {};
  isUpdatingLeistung = false;
  constructor(
    private ps: ProduktStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(LeistungFormErrorMessages);
    
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isUpdatingLeistung = true;
      this.ps.getSingleLeistung(id)
        .subscribe(leistung => {
          this.leistung = leistung;
          this.myLeistungForm.statusChanges.subscribe(() => this.updateErrorMessages());
        });
    }

    this.myLeistungForm.statusChanges.subscribe(() => this.updateErrorMessages());
  }
  submitForm() {
    console.log(this.leistung.name);
    const leistung = LeistungFactory.fromObject(this.leistung);
    console.log(this.leistung.description);

    if (this.isUpdatingLeistung) {
      this.ps.updateLeistung(leistung).subscribe(res => {
        this.router.navigate(['../../leistungen', leistung.id], { relativeTo: this.route });
      });
    } else {
      this.ps.createLeistung(leistung).subscribe(res => {
        this.leistung = LeistungFactory.empty();
        this.myLeistungForm.reset(LeistungFactory.empty());
      });
    }
  }

  updateErrorMessages() {
    this.errors = {};
    for (const message of LeistungFormErrorMessages) {
      const control = this.myLeistungForm.form.get(message.forControl);
      if (control &&
        control.dirty &&
        control.invalid &&
        control.errors[message.forValidator] &&
        !this.errors[message.forControl]) {
        this.errors[message.forControl] = message.text;
      }
    }
  }
}
