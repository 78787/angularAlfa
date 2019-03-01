import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktDetailsComponent } from './produkt-details.component';

describe('ProduktDetailsComponent', () => {
  let component: ProduktDetailsComponent;
  let fixture: ComponentFixture<ProduktDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduktDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduktDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
