import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeistungFormComponent } from './leistung-form.component';

describe('LeistungFormComponent', () => {
  let component: LeistungFormComponent;
  let fixture: ComponentFixture<LeistungFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeistungFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeistungFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
