import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'ab-impressum',
  templateUrl: './impressum.component.html',
  styles: []
})
export class ImpressumComponent {

  constructor(private router: Router, private route: ActivatedRoute) { }

  register(value: any) {
    console.log('ab-impressum');
  }


}
