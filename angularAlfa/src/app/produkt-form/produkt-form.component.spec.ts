import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktFormComponent } from './produkt-form.component';

describe('ProduktFormComponent', () => {
  let component: ProduktFormComponent;
  let fixture: ComponentFixture<ProduktFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduktFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduktFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
