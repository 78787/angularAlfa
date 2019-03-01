import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeistungDetailsComponent } from './leistung-details.component';

describe('LeistungDetailsComponent', () => {
  let component: LeistungDetailsComponent;
  let fixture: ComponentFixture<LeistungDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeistungDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeistungDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
