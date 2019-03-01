import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Produkt } from '../shared/produkt';
import { ProduktFactory } from '../shared/produkt-factory';
import { ProduktStoreService } from '../shared/produkt-store.service';
import { ProduktFormErrorMessages } from './produkt-form-error-messages';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'ab-produkt-form',
  templateUrl: './produkt-form.component.html',
  styles: []
})
export class ProduktFormComponent implements OnInit {

  @ViewChild('myForm') myForm: NgForm;
  produkt = ProduktFactory.empty();
  errors: { [key: string]: string } = {};
  isUpdatingProdukt = false;
  constructor(
    private ps: ProduktStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isUpdatingProdukt = true;
      this.ps.getSingle(id)
        .subscribe(produkt => {
          this.produkt = produkt;
          this.myForm.statusChanges.subscribe(() => this.updateErrorMessages());
        });
    }
    this.myForm.statusChanges.subscribe(() => this.updateErrorMessages());
  }

  submitForm() {
    console.log(this.produkt.name);
    console.log(this.produkt.featured);
    console.log(this.produkt.descriptionFull);

    const produkt = ProduktFactory.fromObject(this.produkt);
    console.log(this.produkt.descriptionFull);

    if (this.isUpdatingProdukt) {
      this.ps.update(produkt).subscribe(res => {
        this.router.navigate(['../../produkte', produkt.id], { relativeTo: this.route });
      });
    } else {

      this.ps.create(produkt).subscribe(res => {
        this.produkt = ProduktFactory.empty();
        this.myForm.reset(ProduktFactory.empty());

      });
    }
  }

  updateErrorMessages() {
    this.errors = {};
    for (const message of ProduktFormErrorMessages) {
      const control = this.myForm.form.get(message.forControl);
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

