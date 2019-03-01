import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeistungListComponent } from './leistung-list.component';

describe('LeistungListComponent', () => {
  let component: LeistungListComponent;
  let fixture: ComponentFixture<LeistungListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeistungListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeistungListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
