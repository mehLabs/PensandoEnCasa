import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page404ErrorComponent } from './page404-error.component';

describe('Page404ErrorComponent', () => {
  let component: Page404ErrorComponent;
  let fixture: ComponentFixture<Page404ErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page404ErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page404ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
