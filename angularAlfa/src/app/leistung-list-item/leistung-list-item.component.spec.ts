import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeistungListItemComponent } from './leistung-list-item.component';

describe('LeistungListItemComponent', () => {
  let component: LeistungListItemComponent;
  let fixture: ComponentFixture<LeistungListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeistungListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeistungListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
