import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Design1FormComponent } from './design1-form.component';

describe('Design1FormComponent', () => {
  let component: Design1FormComponent;
  let fixture: ComponentFixture<Design1FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Design1FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Design1FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
