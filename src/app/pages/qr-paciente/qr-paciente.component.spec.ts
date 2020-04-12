import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrPacienteComponent } from './qr-paciente.component';

describe('QrPacienteComponent', () => {
  let component: QrPacienteComponent;
  let fixture: ComponentFixture<QrPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
