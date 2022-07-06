import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Design2FormComponent } from './design2-form.component';

describe('Design2FormComponent', () => {
  let component: Design2FormComponent;
  let fixture: ComponentFixture<Design2FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Design2FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Design2FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
