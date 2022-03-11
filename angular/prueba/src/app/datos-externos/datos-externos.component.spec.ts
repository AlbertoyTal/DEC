import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosExternosComponent } from './datos-externos.component';

describe('DatosExternosComponent', () => {
  let component: DatosExternosComponent;
  let fixture: ComponentFixture<DatosExternosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosExternosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosExternosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
