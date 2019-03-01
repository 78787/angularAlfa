import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktListItemComponent } from './produkt-list-item.component';

describe('ProduktListItemComponent', () => {
  let component: ProduktListItemComponent;
  let fixture: ComponentFixture<ProduktListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduktListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduktListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
