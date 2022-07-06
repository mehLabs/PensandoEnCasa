import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSocialMediaComponent } from './btn-social-media.component';

describe('BtnSocialMediaComponent', () => {
  let component: BtnSocialMediaComponent;
  let fixture: ComponentFixture<BtnSocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnSocialMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
