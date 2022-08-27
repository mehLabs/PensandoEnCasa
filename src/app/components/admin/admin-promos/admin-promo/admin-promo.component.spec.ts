import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPromoComponent } from './admin-promo.component';

describe('AdminPromoComponent', () => {
  let component: AdminPromoComponent;
  let fixture: ComponentFixture<AdminPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPromoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
