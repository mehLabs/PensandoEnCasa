import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducthighlightComponent } from './producthighlight.component';

describe('ProducthighlightComponent', () => {
  let component: ProducthighlightComponent;
  let fixture: ComponentFixture<ProducthighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducthighlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducthighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
