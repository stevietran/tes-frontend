import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Design2ReportComponent } from './design2-report.component';

describe('Design2ReportComponent', () => {
  let component: Design2ReportComponent;
  let fixture: ComponentFixture<Design2ReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Design2ReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Design2ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
