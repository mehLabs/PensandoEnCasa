import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Auth0ButtonComponent } from './auth0-button.component';

describe('Auth0ButtonComponent', () => {
  let component: Auth0ButtonComponent;
  let fixture: ComponentFixture<Auth0ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Auth0ButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Auth0ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
