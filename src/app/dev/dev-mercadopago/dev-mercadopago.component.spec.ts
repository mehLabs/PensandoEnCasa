import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevMercadopagoComponent } from './dev-mercadopago.component';

describe('DevMercadopagoComponent', () => {
  let component: DevMercadopagoComponent;
  let fixture: ComponentFixture<DevMercadopagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevMercadopagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevMercadopagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
