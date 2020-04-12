import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburguesaDoctorComponent } from './hamburguesa-doctor.component';

describe('HamburguesaDoctorComponent', () => {
  let component: HamburguesaDoctorComponent;
  let fixture: ComponentFixture<HamburguesaDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamburguesaDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamburguesaDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
