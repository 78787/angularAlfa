
import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'ab-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  constructor(private router: Router, private route: ActivatedRoute) { }

}
