import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteInConstructionComponent } from './site-in-construction.component';

describe('SiteInConstructionComponent', () => {
  let component: SiteInConstructionComponent;
  let fixture: ComponentFixture<SiteInConstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteInConstructionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteInConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
