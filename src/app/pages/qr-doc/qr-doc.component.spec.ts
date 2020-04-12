import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrDocComponent } from './qr-doc.component';

describe('QrDocComponent', () => {
  let component: QrDocComponent;
  let fixture: ComponentFixture<QrDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
