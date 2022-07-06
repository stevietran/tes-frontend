import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Design1ReportComponent } from './design1-report.component';

describe('Design1ReportComponent', () => {
  let component: Design1ReportComponent;
  let fixture: ComponentFixture<Design1ReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Design1ReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Design1ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
