import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDComponent } from './info-d.component';

describe('InfoDComponent', () => {
  let component: InfoDComponent;
  let fixture: ComponentFixture<InfoDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
