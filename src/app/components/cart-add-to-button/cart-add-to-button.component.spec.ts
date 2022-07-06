import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartAddToButtonComponent } from './cart-add-to-button.component';

describe('CartAddToButtonComponent', () => {
  let component: CartAddToButtonComponent;
  let fixture: ComponentFixture<CartAddToButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartAddToButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartAddToButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
