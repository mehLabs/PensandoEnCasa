import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueBuscasComponent } from './que-buscas.component';

describe('QueBuscasComponent', () => {
  let component: QueBuscasComponent;
  let fixture: ComponentFixture<QueBuscasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueBuscasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueBuscasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
