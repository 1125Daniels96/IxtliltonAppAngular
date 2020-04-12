import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortabilidadComponent } from './portabilidad.component';

describe('PortabilidadComponent', () => {
  let component: PortabilidadComponent;
  let fixture: ComponentFixture<PortabilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortabilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
