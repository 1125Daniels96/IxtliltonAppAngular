import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburguesaPacienteComponent } from './hamburguesa-paciente.component';

describe('HamburguesaPacienteComponent', () => {
  let component: HamburguesaPacienteComponent;
  let fixture: ComponentFixture<HamburguesaPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamburguesaPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamburguesaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
