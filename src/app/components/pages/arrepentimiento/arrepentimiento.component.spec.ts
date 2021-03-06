import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrepentimientoComponent } from './arrepentimiento.component';

describe('ArrepentimientoComponent', () => {
  let component: ArrepentimientoComponent;
  let fixture: ComponentFixture<ArrepentimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrepentimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrepentimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
